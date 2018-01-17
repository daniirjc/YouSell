import React, {Component} from 'react';
import {observer} from 'mobx-react'
import LoginPage from './Components/LoginPage';
import "./App.css";
import Front from './Components/front';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import store from './stores';
import Menudetail from './Components/Menudetail';
import Navbar from './Components/Navbar';


const history = createHistory()

function requireAuth(nextState, replace) {
    console.log(store.userStore.isAuthenticated.get())
    if (!store.userStore.isAuthenticated.get()) {
        replace('/');
    }
}

class App extends Component {

    render() {
        return (
            <div className="center">
                <BrowserRouter initialRoute={store.userStore.isAuthenticated ? '/main' : ''} history={history}>
                    <div>
                        {
                            store.userStore.isAuthenticated.get() && <div><Navbar/></div>
                        }
                        <div>
                            <Route exact path='/' component={LoginPage}/>
                            <Route path='/main' onEnter={requireAuth} component={Front}/>
                            <Route path='/menudetail' onEnter={requireAuth} component={Menudetail}/>
                        </div>
                    </div>

                </BrowserRouter>
            </div>
        );
    }
}

export default observer(App);
