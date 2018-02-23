import React, {Component} from 'react'
import {DropdownButton, MenuItem} from "react-bootstrap";
import "./cstm.css"
import Modal from 'react-modal';
import store from '../stores';
import axios from 'axios';
import ENV from "../api/env";
import Background from '../account_pic.png';



const styles = {
    pp: {
        display: "flex",
        flexDirection: "column",
    }
}

class DropDownComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalisOpen: false,
            items: []
        }
    }

    openModal = () => {
        this.getUserItems().then(
            this.setState({modalisOpen: true})
        )
    }

    closeModal = () => {
        this.setState({modalisOpen: false})
    }

    getUserItems = () => {
        //let url = ENV.host + ':' + ENV.port + '/search/user';
        let url = ENV.host + '/search/user'
        return axios({
            method: 'post',
            url: url,
            data: {
                user: store.userStore.name.get()
            },
            responseType: 'json'
        }).then(finalResult => {
            console.log("Looks good")
            console.log(finalResult)
            this.setState({items: finalResult.data.items})
        });
    }
    render () {
        let it = this.state.items
        return(
            <div>

                <Modal className="custommodal"
                       isOpen={this.state.modalisOpen}
                       onRequestClose={this.closeModal}
                       contentLabel="GG"
                       ariaHideApp={true}
                >
                    <div style={styles.pp}>
                        <div style={{flex: 1, flexDirection: "row"}}>
                            <img src={Background} style={{border: "solid", borderWidth: 1}} className="img-circle" />
                            <h3 style={{textAlign: "center", color: "rgba(95,183,96,1"}}>{store.userStore.name.get()}</h3>
                        </div>
                        <div style={{flex: 1}}>
                            {console.log(this.state.items[0])}

                            {
                                it.map((menuItem) => {
                                    return(<div className="thumbnail" style={styles.thumb}>
                                        <img style={{height: 200, width: "100%"}} src={menuItem.img[0]} alt=""/>
                                        <div className="caption" style={{alignItems: 'flex-start'}}>
                                            <h4 style={styles.title}>{menuItem.art_name}</h4>
                                            <p style={styles.textdes}>{menuItem.art_desc}</p>
                                            <h5 style={styles.price}>Preis: € {menuItem.art_price}</h5>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                    </div>

                    <button style={{fontSize: 15,top: 0, right: -7, position: "absolute", border: "none" }} className="glyphicon glyphicon-remove-sign" onClick={this.closeModal}/>
                </Modal>

                <Modal className="custommodal"

                />

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