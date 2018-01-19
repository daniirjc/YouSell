import {observable, action} from 'mobx'
import axios from 'axios';



class ItemStore {
    items = observable([]);

    reqItem = action((seitenanzahl) => {
        //const url = 'http://' + ENV.host + ':' + ENV.port + '/main';
        const url = 'http://yousell.localtunnel.me/main'

        return axios.post(url, {
            data: {
                n: seitenanzahl - 1,

            },
            responseType: 'json',
        }).then((res => {
            console.log(res)
            this.items.replace(res.data.Items)
            console.log(this.items)
        }));
    });
}

export default ItemStore
