import React from 'react';
import ENV from './env';
import axios from 'axios';
import axiosDefault from 'axios/lib/defaults';
import {Redirect} from 'react-router-dom';

export function reqItem(seitenanzahl) {
    const url = 'http://' + ENV.host + ':' + ENV.port + '/main';

    return axios({
        method: 'post',
        url: url,
        data: {
            n: seitenanzahl-1,

        },
        responseType: 'json',
    })
}

export function fetchItems() {
    const url = 'http://' + ENV.host + ':' + ENV.port + '/main';
    return fetch(url);
}