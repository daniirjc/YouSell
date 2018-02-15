import React, {Component} from "react";
import Background from '../account_pic.png';
import store from '../stores';

const styles = {
    pp: {
        display: "flex",
        flexDirection: "column",
    }
}

class ProfileComponent extends Component {
    render() {
        return (

            <div style={styles.pp}>
                <div style={{flex: 1, flexDirection: "row"}}>
                    <img src={Background} style={{border: "solid", borderWidth: 1}} className="img-circle" />
                    <h3 style={{textAlign: "center", color: "rgba(95,183,96,1"}}>{store.userStore.name.get()}</h3>
                </div>
                <div style={{flex: 1}}>

                </div>
            </div>
        );
    }
}

export default ProfileComponent;