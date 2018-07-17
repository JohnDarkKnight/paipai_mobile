//const prefix = '/lhb-manage/a/rest/credit/weixin'; // api地址前缀
const prefix = '';
const apis = (config => {
    Object.keys(config).forEach((item) => {
        config[item] = `${prefix}${config[item]}`;
    });
    return config;
})({
    getCsrfToken: '/csrf-token',
    upload: '/upload',
});

export default apis;