import React, {Component} from "react";
import Background from '../account_pic.png';
import store from '../stores';
import axios from 'axios';
import ENV from "../api/env";



class ProfileComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }



    openModal = () => {
        this.setState({modalisOpen: true})
    }

    closeModal = () => {
        this.setState({modalisOpen: false})
    }


    render() {
        return (
<div></div>
        );
    }
}

export default ProfileComponent;