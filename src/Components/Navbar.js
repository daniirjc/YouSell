import React from 'react';
import ENV from '../api/env';
import axios from 'axios';
import Background from '../msg.png';



const styles = {
    bg: {
        backgroundColor: "rgba(255,255,255, 1)",
        border: "none",
        overflow: "scroll",
        borderBottom: "solid",
        borderBottomWidth: 1,
    },
    closeimage: {
        backgroundImage: `url(${Background})`,
        display: "inline-block",
        height: 30,
        width: 30,
        border: "none",
        marginRight: 10,
        marginTop: 17,
        marginLeft: 15,
    },
    pb: {
        borderRadius: "40%",
        marginTop: 20,
        marginRight: 15,
    },
    sell: {
        marginTop: 15,
        backgroundColor: "black",
        border: "none",
        borderRadius: 0,
    },
    searchPro: {
        marginTop: 15,
        height: 30,
        width: "30%",
        border: "none",
        borderBottom: "solid",
        borderBottomWidth: 4,
        borderBottomColor: "rgba(247,224,141,1)",
        color: "rgba(247,224,141,1)",
        textAlign: "center",
},
    searchKat: {
        marginTop: 15,
        height: 30,
        width: "25%",
        border: "none",
    },
    brand: {
        color: "rgba(95,183,96,1)",
        fontSize: 30,
        marginTop: 10,
    },

};



class Navbar extends React.Component {
    render () {
        return(

            <div>
                <nav className="navbar navbar-inverse navbar-static-top" style={styles.bg}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a style={styles.brand} className="navbar-brand" href="/main">YouSell</a>
                        </div>
                        <input style={styles.searchPro} type="text" name="search" placeholder="Suche"/>

                        <ul className="nav navbar-nav navbar-right">
                            <li><button style={styles.sell} className="btn btn-success btn-block">+Verkaufen</button></li>
                            <li><button style={styles.closeimage}/></li>
                            <li><button style={styles.pb} className="glyphicon glyphicon-user"/></li>
                            <li style={{marginTop: 15, marginRight: 10, border: 'none'}}><button className="btn btn-success btn-block">Abmelden</button></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
