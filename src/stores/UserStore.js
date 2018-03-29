import { observable, action } from 'mobx'
import { postLoginDetails, fetchToken } from '../api/login';
import ENV from "../api/env";
import * as axios from "axios";




class UserStore {

    name = observable('');
    loginLoading = observable(false);
    token = observable('');
    error = observable(false);
    errorText = observable('');
    isAuthenticated = observable(false);
    userItems = observable([]);
    rating = observable(0.0)
    sumrating = observable(0.0)

    login = action((username, password, cb) => {
        this.name = observable(username);
        this.loginLoading.set(true);
        fetchToken().then((res) => res.json()).then((data => {
            if (data) {
                this.token = data._csrf;
                this.error.set(false);
                this.errorText = observable('');
                postLoginDetails(username, password, this.token).then((res) => {
                    if (res.data.success) {
                        this.isAuthenticated.set(true)
                        cb();
                    } else {
                        this.error.set(true);
                        this.errorText = observable('Fehler aufgetreten');
                        this.name = observable('');
                    }
                    this.loginLoading.set(false);
                })
            }
        })).catch(() => {
            this.errorText = 'Fehler';
            this.error.set(true);
        })
    })

    deleteItem = action((id) => {
        let url = ENV.host + '/main/remove'
        console.log("die id: " + id)

        return axios({
            method: 'post',
            url: url,
            data: {
                id: id
            },
            responseType: 'json'
        }).then(finalResult => {
            finalResult ? this.getUserItems() : alert("Fehler beim Löschen")
        }).catch(e => console.log("error", e));
    });

    getUserItems = action((id) => {
        let url = ENV.host + '/search/user'
        return axios({
            method: 'post',
            url: url,
            data: {
                user: this.name
            },
            responseType: 'json'
        }).then(finalResult => {
            this.userItems.replace(finalResult.data.items);
        }).catch(e => console.log("error", e));
    })

    sendRating = action((id) => {
        let url = ENV.host + '/rate'

        return axios({
            method: 'post',
            url: url,
            data: {
                user: this.name,
                rating: this.rating
            },
            responseType: 'json'
        }).then(finalResult => {
            this.sumrating.set(finalResult.data.avgRating)
        }).catch(e => console.log(e))

    })

    getRating = action((id) => {
        let url = ENV.host + '/rate/' + this.name;

        return axios({
            // method: 'post',
            method: 'GET',
            url: url,
            // data: {
            //     user: this.name,
            // },
            responseType: 'json'
        }).then(finalResult => {
            this.sumrating.set(finalResult.data.avgRating)
        }).catch(e => console.log(e))
    })
}

export default UserStore