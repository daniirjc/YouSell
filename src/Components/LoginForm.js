import React from 'react';
import { observer } from 'mobx-react'
import { withRouter } from 'react-router';
import store from '../stores';

const bg = {
    backgroundColor: "rgba(0,0,0, 0.5)",
    border: "none",
    borderStyle: "left",
    borderLeft: "thin solid white",
    color: "white"
};

const glybg = {
    backgroundColor: "rgba(0,0,0, 0.5)",
    border: "none"
};

const head = {
    fontSize: 45,
    fontFamily: "Helvetica",
    color: "white",
    marginBottom: 30,
};

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            token: '',
            error: false,
        };
    }

    handlePasswordInput = (event) => {
        this.setState({ password: event.target.value });
    }

    handleUserInput = (event) => {
        this.setState({ username: event.target.value });
    }

    onLogin = (e) => {
        e.preventDefault();
        store.userStore.login(this.state.username, this.state.password, this.props.onLoginSuccess);
    }


    render () {
        return (
            store.userStore.loginLoading.get() ? <h1>LOADING</h1> :
                (
                    <form id="loginform" className="form-horizontal" method="post" onSubmit={this.onLogin} style={{textAlign: 'center'}}>
                        <input name="_csrf" value={this.state.token} type="hidden" readOnly={true} />
                        <label style={head}>
                            LOGIN
                        </label>
                        <div style={{marginBottom: 25}} className="input-group">
                            <span  style={glybg} className="input-group-addon"><i className="glyphicon glyphicon-user white"/></span>
                            <input id="login-username" type="text" style={bg} className="form-control" name="username"  value={this.state.username} onChange={this.handleUserInput} placeholder="username" required/>
                        </div>

                        <div style={{marginBottom: 25}} className="input-group">
                            <span  style={glybg} className="input-group-addon"><i className="glyphicon glyphicon-lock white"/></span>
                            <input id="login-password" type="password"  style={bg} className="form-control" value={this.state.password} onChange={this.handlePasswordInput} name="password" placeholder="password" required/>
                        </div>

                        <div style={{marginTop:10, width: "100%"}} className="input-group">
                            <button type="submit" className="btn btn-success btn-block">LOGIN</button>
                        </div>
                    </form>
                )



        );
    }
}

export default observer(LoginForm);