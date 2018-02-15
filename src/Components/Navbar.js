import React from 'react';
import './cstm.css'
import DropDownComponent from "./DropDownComponent";
import CreateProductComponent from "./CreateProductComponent";
import Modal from 'react-modal';



const styles = {
    bg: {
        backgroundColor: "rgba(255,255,255, 1)",
        border: "none",
        overflow: "scroll",
        borderBottom: "solid",
        borderBottomWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    pb: {
        borderRadius: "40%",
        marginTop: 20,
        marginRight: 15,
    },
    sell: {
        backgroundColor: "black",
        border: "none",
        borderRadius: 0,
        justifyContent: "space-between",


    },
    searchPro: {
        height: 30,
        width: "75%",
        border: "solid",
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: "rgba(247,224,141,1)",
        textAlign: "center",
    },
    searchKat: {
        height: 30,
        width: "25%",
        border: "solid",
        borderLeftStyle: "none",
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: "rgba(51, 102, 255,1)",
        borderRadius: 0,
        backgroundPosition: "right 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=)",
        WebkitAppearance: "none",
        padding: ".3em",
        paddingRight: "1.5em",
        backgroundColor: "#eee"
    },
    brand: {
        color: "rgba(95,183,96,1)",
        fontSize: 30,
        marginTop: 10,
    },

    rightnav: {
        display: "flex",
        flexBasis: "10%",
        height: 30,
        justifyContent: "space-between",
        justifyItems: "safe",
    },
    centnav: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        flexBasis: "40%",
        height: 30
    },

};


class NavbarComponent extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            modalisOpen: false,
        }
    }

    openModal = () => {
        this.setState({modalisOpen: true})
    }

    closeModal = () => {
        this.setState({modalisOpen: false})
    }

    render() {
        return (

            <div>

                <Modal className="custommodal"
                       isOpen={this.state.modalisOpen}
                       onRequestClose={this.closeModal}
                       contentLabel="GG"
                       ariaHideApp={false}
                >
                    <CreateProductComponent/>
                    <button style={{fontSize: 15,top: 0, right: -7, position: "absolute", border: "none" }} className="glyphicon glyphicon-remove-sign" onClick={this.closeModal}/>
                </Modal>
                <nav style={styles.bg}>
                    <div className="navbar-header">
                        <a style={styles.brand} className="navbar-brand" href="/main">YouSell</a>
                    </div>

                    <div style={styles.centnav} className="input-group">


                        <input style={styles.searchPro} type="text" name="search" placeholder="Ich suche nach ... " className="input-group-addon"/>

                        <select style={styles.searchKat}>
                            <option>Kategorien</option>
                            <option>Nachhilfe</option>
                            <option>Bücher</option>
                            <option>Sonstiges</option>
                        </select>

                            <button className="input-group-addon" style={{borderWidth: 0.5, backgroundColor: "white"}}>
                                <span className="glyphicon glyphicon-search" style={{verticalAlign: "middle", right: 6, top: 0}}/>
                            </button>
                    </div>

                    <div style={styles.rightnav}>
                        <div style={{marginTop: 15}}>
                            <button style={styles.sell} className="btn btn-success btn-block" onClick={this.openModal}>+Verkaufen
                            </button>
                        </div>
                        <div style={{marginTop: 14, marginRight: 70}}>
                            <DropDownComponent/>
                        </div>

                    </div>
                </nav>
            </div>

        );
    }
}

export default NavbarComponent;
