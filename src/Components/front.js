import React from 'react';
import axios from 'axios';
import Item from './Item';
import NavbarComponent from "./Navbar";


const styles = {
    bg: {
        backgroundColor: 'white',
    }
}


class Front extends React.Component {
    forecRender = () => {
        this.forceUpdate()
    }

    render () {
        return(
            <div>
                <div style={styles.bg}>
                    <div>
                        <NavbarComponent forcerender={this.forecRender} />
                    </div>
                    <Item history={this.props.history} />
                </div>
            </div>
        );
    }
}

export default Front;
