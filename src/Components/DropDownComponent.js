import React, {Component} from 'react'
import {DropdownButton, MenuItem} from "react-bootstrap";
import "./cstm.css"
import Modal from 'react-modal';
import ProfileComponent from "./ProfileComponent";


class DropDownComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalisOpen: false
        }
    }

    openModal = () => {
        this.setState({modalisOpen: true})
    }

    closeModal = () => {
        this.setState({modalisOpen: false})
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
                    <ProfileComponent/>
                    <button style={{fontSize: 15,top: 0, right: -7, position: "absolute", border: "none" }} className="glyphicon glyphicon-remove-sign" onClick={this.closeModal}/>
                </Modal>

                <div style={{zIndex: 100, position: "absolute"}}>
                    <DropdownButton className="glyphicon glyphicon-th" style={{borderRadius: 0, border: 0, width: 40}} title={""} id={""}>
                        <MenuItem onClick={this.openModal}>Profile</MenuItem>
                        <MenuItem href="#">Messages</MenuItem>
                        <MenuItem divider />
                        <MenuItem href="#">Abmelden</MenuItem>
                    </DropdownButton>
                </div>

            </div>




        );
    }
}

export default DropDownComponent;