import React from 'react';
import {reqItem, fetchItems} from "../api/main";
import Modal from 'react-modal'


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

    }



};


class Item extends React.Component {

    constructor() {
        super();

        this.state = {
            items: [],
            modalisOpen: false,
        }
    }

    openModal = () => {
        this.setState({modalisOpen: true})
    }

    closeModal = () => {
        this.setState({modalisOpen: false})
    }

    componentDidMount() {
        fetchItems().then((res) => res.json()).then((data => this.setState({items: data})));
    }




    render() {
        const {items} = this.state;
        const { history } = this.props;
        return (
            <div className="container">
                <div className="row" style={styles.productview}>

                    {
                        items.map(function (menuItem) {
                            return (
                                <div onClick={() => { this.openModal()}} className="col-xs-12 col-sm-6 col-md-3" style={styles.space}>
                                    <Modal
                                        isOpen={this.state.modalisOpen}
                                        onRequestClose={this.closeModal}
                                        contentLabel="GG"

                                    >

                                        <button className="btn btn-success" onClick={this.closeModal}>Close</button>
                                    </Modal>
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
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Item;