import React, {Component} from 'react'
import {DropdownButton, MenuItem} from "react-bootstrap";
import "./cstm.css"

class DropDownComponent extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return(

            <div style={{zIndex: 100, position: "absolute"}}>
                <DropdownButton className="glyphicon glyphicon-th" style={{borderRadius: 0, border: 0, width: 40}} title={""} id={""}>
                    <MenuItem href="#">Profile</MenuItem>
                    <MenuItem href="#">Messages</MenuItem>
                    <MenuItem divider />
                    <MenuItem href="#">Abmelden</MenuItem>
                </DropdownButton>
            </div>


        );
    }
}

export default DropDownComponent;