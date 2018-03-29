import React from 'react';
import ENV from './env';
import axios from 'axios';
import axiosDefault from 'axios/lib/defaults';
import { Redirect } from 'react-router-dom';




axiosDefault.xsrfHeaderName = "X-CSRFToken";


export function postLoginDetails(username, password, token) {
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
    const url = ENV.host + '/login';
    return fetch(url)
}
