import React, {Component} from 'react'
import {DropdownButton, MenuItem} from "react-bootstrap";
import "./cstm.css"
import Modal from 'react-modal';
import store from '../stores';
import axios from 'axios';
import ENV from "../api/env";
import Background from '../account_pic.png';
import MessageComponent from "./MessageComponent";
import cookie from 'react-cookies'
import ProfileComponent from "./ProfileComponent";



const myStorage = window.localStorage;


class DropDownComponent extends Component {



    constructor(props) {
        super(props);

        this.state = {
            modalisOpen: false,
            items: [],
            content: ''
        }
    }

    openModal = () => {
        store.userStore.getUserItems().then(
            this.setState({modalisOpen: true})
        )
    }

    closeModal = () => {
        this.setState({modalisOpen: false})
    }


    changeContent = (event) => {
        this.setState({content: event})
        console.log(this.state.content)
    }

    logout = () => {
        myStorage.setItem('auth', false)
        store.userStore.isAuthenticated.set(false)
    }

    render () {
        return(
            <div>
                <Modal className="custommodal"
                       isOpen={this.state.modalisOpen}
                       onRequestClose={this.closeModal}
                       contentLabel="GG"
                       ariaHideApp={false}
                >

                    {this.state.content=== 'Profile' ? <ProfileComponent items={this.state.items}/>
                        : <MessageComponent/>
                    }
                    <button className="close" onClick={this.closeModal}/>
                </Modal>
                <div style={{zIndex: 100, position: "absolute"}}>
                    <DropdownButton className="glyphicon glyphicon-th" style={{borderRadius: 0, border: 0, width: 40}} title={""} pullRight={true} id={""} onSelect={this.changeContent}>
                        <MenuItem eventKey={"Profile"} onClick={this.openModal}>Profile</MenuItem>
                        <MenuItem eventKey={"Messages"} onClick={this.openModal}>Messages</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={"Abmelden"} onClick={this.logout}>Abmelden</MenuItem>
                    </DropdownButton>
                </div>

            </div>

        );
    }
}

export default DropDownComponent;