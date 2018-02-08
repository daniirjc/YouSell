import React from 'react';
import ENV from './env';
import axiosDefault from 'axios/lib/defaults';
import {Redirect} from 'react-router-dom';



export function fetchItems() {
    //const url = 'http://' + ENV.host + ':' + ENV.port + '/main';
    const url = ENV.host + '/main'

    return fetch(url);
}