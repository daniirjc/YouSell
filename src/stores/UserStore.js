import {observable, action} from 'mobx'
import {postLoginDetails, fetchToken} from '../api/login';
import ENV from "../api/env";
import * as axios from "axios";


const myStorage = window.localStorage;


class UserStore {

    name = observable('');
    loginLoading = observable(false);
    token = observable('');
    error = observable(false);
    errorText = observable('');
    isAuthenticated = observable(false);
    userItems = observable([]);

    login = action((username, password, cb) => {
        this.name = observable(username);
        this.loginLoading.set(true);
        fetchToken().then((res) => res.json()).then((data => {
            if (data) {
                console.log('Data received');
                this.token = data._csrf;
                console.log(this.token);
                console.log(data)
                this.error.set(false);
                this.errorText = observable('');
                postLoginDetails(username, password, this.token).then((res) => {
                    if (res.data.success) {
                        this.isAuthenticated.set(true)
                        //myStorage.setItem('auth', this.isAuthenticated.get())
                        console.log(this.isAuthenticated.get())
                        console.log('Logged in')
                        cb();
                    } else {
                        this.error.set(true);
                        this.errorText = observable('Fehler aufgetreten');
                        this.name = observable('');
                        console.log('Error')
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
        let url = ENV.host + ':' + ENV.port + '/search/remove';
        //let url = ENV.host + '/search/user'

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
        let url = ENV.host + ':' + ENV.port + '/search/user';
        //let url = ENV.host + '/search/user'
        return axios({
            method: 'post',
            url: url,
            data: {
                user: this.name
            },
            responseType: 'json'
        }).then(finalResult => {
            console.log("Looks good")
            console.log(finalResult)
            this.userItems.replace(finalResult.data.items);
        }).catch(e => console.log("error",e));
    })
}

export default UserStore