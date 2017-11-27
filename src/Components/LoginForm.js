import React from 'react';
import { postLoginDetails } from '../api/login';

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
    marginBottom: 30
};

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    handleUserInput(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordInput(event) {
        this.setState({password: event.target.value});

    }

    onLogin(e) {
        e.preventDefault();
        postLoginDetails(this.state.username, this.state.password).then(res => console.log(res));
    }


    render () {
        return (
                <form id="loginform" className="form-horizontal" method="post" onSubmit={this.onLogin}>
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


        );
    }
}

export default LoginForm;