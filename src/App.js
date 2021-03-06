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
    return (
        authed.get() ? <Route path="/main" component={Front} /> : <Redirect to={"/"}/>
    );
}

class App extends Component {

    constructor(props) {
        super(props);
        store.socketStore.triggerMsg()
    }

    componentWillUnmount() {
        store.socketStore.socket.close();
    }
    render() {
        const auth = store.userStore.isAuthenticated;
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
