import { observable, action } from 'mobx'
import { postLoginDetails, fetchToken } from '../api/login';

class UserStore {

    name = observable('');
    isAuthenticated = observable(false);
    loginLoading = observable(false);
    token = observable('');
    error = observable(false);
    errorText = observable('');

    login = action((username, password, cb) => {
        this.name = observable(username);
        this.loginLoading.set(true);
        console.log("Hereee")
        fetchToken().then((res) => res.json()).then((data => {
            console.log("heree")
            if(data) {
                console.log('Data received');
                this.token = data._csrf;
                console.log(this.token);
                this.error.set(false);
                this.errorText = observable('');
                postLoginDetails(username, password, this.token).then((res) => {
                    console.log("reees:" + res)
                    if (res.data.success) {
                        this.isAuthenticated.set(true)
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

    createProduct = action(() => {
        console.log('Product created')
    })





}

export default UserStore