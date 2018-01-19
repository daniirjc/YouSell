import React, {Component} from 'react';
import {reqItem, fetchItems} from "../api/main";
import Modal from 'react-modal';
import {observer} from 'mobx-react'
import store from '../stores'
import ModalComponent from "./ModalComponent";

const styles = {
    productview: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    thumb: {
        height: '100%',
        borderRadius: 0,
        position: 'relative',
        border: '1px solid rgba(192,192,192,0.2)',

    },
    space: {
        marginBottom: 10,
    },
    textdes: {
        textAlign: 'left',
        font: 'arial',
    },
    price: {
        fontSize: 20,
        color: "rgba(95,183,96,1)",
        position: 'absolute',
        bottom: 0,
        left: 5,
    },
    title: {
        fontSize: 20,
        color: "rgba(95,183,96,1)",

    },
    content: {
        textAlign: 'center'
    }


};


class Item extends Component {

    constructor() {
        super();

        this.state = {
            items: [],
            modalisOpen: false,
            activeItemId: null,
            currItem: [],
        }
    }

    openModal = (id) => {
        console.log('Inside openModal()', id)
        this.setState({modalisOpen: true, activeItemId: id, currItem: store.itemStore.items.find(x => x._id === id)})
        console.log(this.state.currItem.art_name)

        console.log(this.state.activeItemId)
    }

    closeModal = () => {
        this.setState({modalisOpen: false})
    }

    componentWillMount() {
        store.itemStore.reqItem(2);
    }

    render() {
        const {items} = this.state;
        const {history} = this.props;


        return (
            <div className="container">

                <Modal className="custommodal"
                       isOpen={this.state.modalisOpen}
                       onRequestClose={this.closeModal}
                       contentLabel="GG"
                       ariaHideApp={false}
                >
                    {console.log(this.state.currItem)}
                    <h3>{this.state.currItem.art_name}</h3>
                    <button className="btn btn-success" onClick={this.closeModal}>Close</button>
                </Modal>

                <div className="row" style={styles.productview}>

                    {
                        store.itemStore.items.map(function (menuItem) {
                            return (
                                <div onClick={() => {
                                    console.log('Right before openModal()', menuItem._id)
                                    this.openModal(menuItem._id)
                                }} className="col-xs-12 col-sm-6 col-md-3" style={styles.space}>
                                    <div className="thumbnail" style={styles.thumb}>
                                        <img src={menuItem.img[0]} alt=""/>
                                        <div className="caption">
                                            <h4 style={styles.title}>{menuItem.art_name}</h4>
                                            <p style={styles.textdes}>{menuItem.art_desc}</p>
                                            <h5 style={styles.price}>Preis: € {menuItem.art_price}</h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        }, this)
                    }

                </div>
            </div>
        );
    }
}


export default observer(Item);