import React from 'react';
import ENV from './env';
import axios from 'axios';
import axiosDefault from 'axios/lib/defaults';
import {Redirect} from 'react-router-dom';




axiosDefault.xsrfHeaderName = "X-CSRFToken";


export function postLoginDetails(username, password, token) {
    //const url = ENV.host + ':'+ ENV.port + '/login';
    const url = ENV.host + "/login";

    return axios({
        method: 'post',
        url: url,
        withCredentials: true,
        headers: {
            "X-CSRFToken": token
        },
        data: {
            username: username,
            password: password,
        },
        responseType: 'json'
    })
}

export function fetchToken() {
    //const url = ENV.host + ':' + ENV.port + '/login';
    const url = ENV.host + '/login';
    console.log("im fetching")
    console.log(url)
    return fetch(url)
}

/*
let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    console.log("hi")
    console.log(username);
    console.log(password);
    console.log(formData.get("username"));
    return fetch(url, {
        method: 'POST',
        withCredentials: true,
        responseType: 'json',
        header: {
            'X-CSRFToken': token
        },
        body: formData
    }).then(res => res.json()).then((data) => { cb(); console.log(data); return data; })
        .catch(e => console.log(e))
 */