import React, {Component} from "react";
import { observer } from 'mobx-react'
import Background from '../Assets/account_pic.png';
import store from '../stores';
import '../Styles/products.css'
import ReactStars from 'react-stars'


const styles = {
    thumb: {
        width: '100%',
        borderRadius: 0,
        position: 'relative',
        border: '1px solid rgba(192,192,192,0.2)',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    productview: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 5,
        fontFamily: "'Open Sans',sans-serif",
        alignItems: "flex-start",
        justifyContent: "space-around",
    },
    space: {
        marginBottom: 10,
    },

}

class ProfileComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentWillMount () {
        store.userStore.getUserItems()
        store.userStore.getRating()
    }

    deleteItem = (id) => {
        store.userStore.deleteItem(id)
    }


    render() {
        return (
            <div>
                <div style={{display:"flex", flexDirection: "row"}}>
                    <img src={Background} style={{border: "solid", borderWidth: 1, alignItems: "flex-start"}} className="img-circle"/>
                    <div style={{paddingLeft: 10}}>
                        <h3 style={{
                            color: "rgba(95,183,96,1"
                        }}>{store.userStore.name.get()}</h3>
                        <ReactStars count={5}
                                    size={12}
                                    color2={'#ffd700'}
                                    value={store.userStore.sumrating}
                                    edit={false}
                        />
                    </div>

                </div>
                <h1 style={{fontSize: 15, color: "grey"}}>Meine Produkte</h1><hr style={{marginTop: 0}}/>
                <div style={styles.productview}>
                    {
                        store.userStore.userItems.map((menuItem) => {
                            const desc = `${menuItem.art_desc.substring(0,10)}...`;
                            const art = `${menuItem.art_name.substring(0,6)}...`;
                            return (<div>
                                <div className="thumbnail" style={styles.thumb}>
                                        <img style={{height: 100, width: 100}} src={menuItem.img[0]} alt=""/>
                                        <div className="caption" style={{alignItems: 'flex-start'}}>
                                            <h4>{art}</h4>
                                            <p>{desc}</p>
                                            <h5>Preis: € {menuItem.art_price}</h5>
                                        </div>
                                    <button className="close" onClick={() => this.deleteItem(menuItem._id)}/>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default observer(ProfileComponent);