import axios from 'axios';

export function serviceCall(requestData) {
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    return new Promise((resolve, reject) => {
        requestData.params = requestData.params || {};
        const request = {
            url: requestData.url,
            method: requestData.method || 'GET',
            headers: requestData.headers || {}
        };
        request.headers['Content-Type'] = 'application/json';
        axios(request).then(resolve).catch(function(error) {
            console.warn('Server response error: ', error);
            reject(error.response ? error.response : error);
        });
    });
}
