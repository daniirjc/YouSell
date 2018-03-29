import React, {Component} from 'react';
import { SocketProvider } from 'socket.io-react';
import {observer} from 'mobx-react'
import LoginPage from './Components/LoginPage';
import "./App.css";
import Front from './Components/front';
import {BrowserRouter} from 'react-router-dom';
import {Redirect} from 'react-router'
import {Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import store from './stores';



const history = createHistory()
const myStorage = window.localStorage;

function PrivateRoute ({component: Component, authed, ...rest}) {
    //const x = myStorage.getItem("auth")
    console.log("ATUHED"  + authed)
    return (
        authed.get() ?   "falssee" : <Route path="/main" component={Front}/>
    );
}

class App extends Component {

    constructor(props) {
        super(props);
        store.socketStore.triggerMsg()
    }
    render() {
        const auth = store.userStore.isAuthenticated;
        console.log("dei mum", store.userStore.isAuthenticated.get())
        return (
            <SocketProvider socket={store.socketStore.socket}>
                <div className="center">
                    <BrowserRouter history={history}>
                        <div>
                            <div>
                                <Route exact path='/' component={LoginPage}/>
                                <PrivateRoute path='/main' component={Front} authed={auth}/>
                            </div>
                        </div>
                    </BrowserRouter>
                </div>
            </SocketProvider>
        );
    }
}

export default observer(App);
