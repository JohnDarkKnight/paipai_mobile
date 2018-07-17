import http from './http';
import apis from './apis';

export function getCsrfToken(params = {}) {
    return http.get(apis.getCsrfToken, params);
}

export function upload(params = {}, config = {}) {
    return http.post(apis.upload, params, config)

}