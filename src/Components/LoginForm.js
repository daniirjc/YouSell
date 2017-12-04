import React from 'react';
import { postLoginDetails, fetchToken } from '../api/login';

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
            password: '',
            loading: false,
            token: '',
            error: false,
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

    componentWillMount() {
        this.fetchTokenOnStart();
    }

    onLogin(e) {
        e.preventDefault();
        this.setState({loading: true})
        postLoginDetails(this.state.username, this.state.password, () => { this.setState({ loading: false }) })
    }

    fetchTokenOnStart = async  () => {
        this.setState({ error: false })
        try {
            const res = await fetchToken();
            const data = await res.json();
            if (data) {
                console.log("token", data);
                this.setState({ token: data._csrf })
            }
        } catch(e) {
            console.log(e)
            this.setState({ error: true })
        }

    };


    render () {
        return (
            this.state.loading ? <h1>LOADING</h1> :
                (
                    <form id="loginform" className="form-horizontal" method="post" onSubmit={this.onLogin}>
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

export default LoginForm;