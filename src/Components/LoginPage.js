import React, {Component} from 'react';
import { observer } from 'mobx-react'
import LoginForm from './LoginForm';
import Background from '../Assets/guybg.png';


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


class LoginPage extends Component {

    render () {
        return (
            <div className="container-fluid" style={bg}>
                <div className="row" style={{display: "flex", justifyContent: "center", width: "100%"}}>
                    <div className="col-xs-9  col-sm-6  col-md-4 col-lg-4 ">
                        <LoginForm onLoginSuccess={() => this.props.history.push('/main')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default observer(LoginPage);