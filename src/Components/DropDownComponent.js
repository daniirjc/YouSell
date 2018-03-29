import React, {Component} from 'react'
import {DropdownButton, MenuItem} from "react-bootstrap";
import "../Styles/cstm.css"
import Modal from 'react-modal';
import MessageComponent from "./MessageComponent";
import ProfileComponent from "./ProfileComponent";
import store from '../stores';




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
        this.setState({modalisOpen: true})
    }

    closeModal = () => {
        this.setState({modalisOpen: false})
    }


    changeContent = (event) => {
        this.setState({content: event})
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
                        <MenuItem eventKey={"Profile"} onClick={this.openModal}>Profil</MenuItem>
                        <MenuItem eventKey={"Messages"} onClick={this.openModal}>Nachrichten</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={"Abmelden"} onClick={this.logout}>Abmelden</MenuItem>
                    </DropdownButton>
                </div>

            </div>

        );
    }
}

export default DropDownComponent;