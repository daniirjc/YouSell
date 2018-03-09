import { observable, action } from 'mobx'
import axios from 'axios';
import ENV from '../api/env';



class ItemStore {
    items = observable([]);
    loaded = false;
    page = observable(1);

    reqItem = action(() => {
        const url = ENV.host + ':' + ENV.port + '/main'
        // const url = ENV.host + "/main"

        return axios.post(url, {
            responseType: 'json',
        }).then((res => {
            this.loaded = true;
            this.items.replace(res.data.Items)
        }));
    });

    spliceObservable = action((start, end) => {
        if (this.loaded) {
            console.log("I'm splicing");
            console.log(this.items);
            console.log(start, end)
            let sliced = this.items.slice(start, end);
            console.log("sliced", sliced)
            return sliced
        } else {
            console.log("Loaded: ", this.loaded);
        }
    });

    gg = action((res) => {
        this.items.replace(res)
        this.page = 1
    })
}

export default ItemStore
