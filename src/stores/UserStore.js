import { observable, action } from 'mobx'
import { postLoginDetails, fetchToken } from '../api/login';

class UserStore {

    name = observable('');
    loginLoading = observable(false);
    token = observable('');
    error = observable(false);
    errorText = observable('');
    isAuthenticated = observable(false);


    login = action((username, password, cb) => {
        this.name = observable(username);
        this.loginLoading.set(true);
        fetchToken().then((res) => res.json()).then((data => {
            if(data) {
                console.log('Data received');
                this.token = data._csrf;
                console.log(this.token);
                console.log(data)
                this.error.set(false);
                this.errorText = observable('');
                postLoginDetails(username, password, this.token).then((res) => {
                    if (res.data.success) {
                        this.isAuthenticated.set(true)
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

    createProduct = action(() => {
        console.log('Product created')
    })
}

export default UserStore