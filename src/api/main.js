import React from 'react';
import ENV from './env';
import {Redirect} from 'react-router-dom';



export function fetchItems() {
    const url = ENV.host + "/main"

    return fetch(url);
}