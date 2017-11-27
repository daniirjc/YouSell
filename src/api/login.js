import React from 'react';
import ENV from './env';


export function postLoginDetails(username, password) {
    const url = 'http://' + ENV.host + ':' + ENV.port + '/login';
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return fetch(url, {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .catch(e => console.log(e))
}
