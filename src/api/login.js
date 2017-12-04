import React from 'react';
import ENV from './env';


export function postLoginDetails(username, password, cb) {
    const url = 'http://' + ENV.host + ':' + ENV.port + '/login';
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return fetch(url, {
        method: 'POST',
        body: formData
    }).then(res => res.json()).then((data) => { cb(); console.log(data); return data; })
        .catch(e => console.log(e))
}

export function fetchToken() {
    const url = 'http://' + ENV.host + ':' + ENV.port;
    return fetch(url)
}