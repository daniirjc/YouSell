import { observable, action } from 'mobx'
import axios from 'axios';
import ENV from '../api/env';



class ItemStore {
    items = observable([]);
    loaded = false;

    reqItem = action(() => {
        const url = ENV.host + "/main"

        return axios.post(url, {
            responseType: 'json',
        }).then((res => {
            this.loaded = true;
            this.items.replace(res.data.Items)
        }));
    });

    spliceObservable = action((start, end) => {
        if (this.loaded) {
            return this.items.slice(start, end)
        } else {
        }
    });
}

export default ItemStore
