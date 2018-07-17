import axios from 'axios';
import {Toast} from 'antd-mobile';

//const DevUrl = 'http://39.104.178.102';          // 开发http请求地址
const DevUrl = 'http://192.168.2.18:7001';          // 开发http请求地址
const ProUrl = '';                               // 正式包http请求地址

let url = null;
const errMsg = '请求服务异常';

const Process_Env = ['development', 'production'];
let process_env = null;

switch (process.env.NODE_ENV) {
    case 'development':
    case  'test':
        url = DevUrl;
        process_env = Process_Env[0];
        break;
    case 'production':
        url = ProUrl;
        process_env = Process_Env[1];
        break;
    default:
        url = ProUrl;
        process_env = Process_Env[1];
        break;
}

class ResponseError extends Error {
    constructor(message, code, origin) {
        super(message);
        this.code = code;
        this.origin = origin;
    }
}

axios.defaults.baseURL = url;
axios.defaults.withCredentials = false;
axios.defaults.timeout = 5500;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const pending = [];
let cancelToken = axios.CancelToken;
const removePending = (config) => {
    for (let p in pending) {
        if (pending[p].url === config.url + '&' + config.method) {
            pending[p].cancelFunc();
            pending.splice(p, 1);
        }
    }
};

const _onHandleError = (error) => {
    Toast.fail(errMsg, 1.5);
    if (process_env === Process_Env[0]) {
        if (error.response) {
            const {data, status, header} = error.response;
            data && console.log("data", error.response.data);
            status && console.log('status', error.response.status);
            header && console.log('header', error.response.header);
        } else {
            console.log('Error', error.message);
        }
        console.log('error.message', error.message);
    }
    throw new Error(error);
};

axios.interceptors.request.use(config => {
    removePending(config);
    config.cancelToken = new cancelToken((func) => {
        pending.push({url: config.url + '&' + config.method, cancelFunc: func});
    });
    config.headers = {
        // 在此处添加Token
        // token: '123456789',
        ...config.headers
    };
    return config;
}, error => {
    _onHandleError(error);
});

axios.interceptors.response.use(response => {
    // 在这里你可以判断后台返回数据携带的请求码
    removePending(response.config);
    const {status, data, header} = response;
    if (status === 200) {
        return data;
    } else {
        // 非200请求报错
        console.log('err response', response);
        throw new ResponseError(status, status, header);
    }
}, error => {
    _onHandleError(error);
});

const http = {};

http.get = function (url, params = {}, config = {}) {
    return axios.get(url, {params}, config);
};

http.post = function (url, params = {}, config = {}) {
    console.log('config', config);
    return axios.post(url, params, config);
};

export default http;