import React from 'react';
import { observer } from 'mobx-react'
import LoginForm from './LoginForm';
import Background from '../guybg.png';
import {reqItem} from "../api/main";


const bg = {
    height: "100%",
    width: "100%",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight:0, paddingLeft:0

};


class LoginPage extends React.Component {

    render () {
        return (
            <div className="container-fluid" style={bg}>
                <div className="row">
                    <div className="col-xs-9 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
                        <LoginForm onLoginSuccess={() => this.props.history.push('/main').then(reqItem(2))}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default observer(LoginPage);