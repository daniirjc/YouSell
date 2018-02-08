import React, {Component} from 'react';
import ENV from '../api/env';


class MsgComponent extends Component {

    constructor (props){
        super(props)

        this.state = {
            show: true,
            msg: '',
        }
    }

    handleMessage = (event) => {
        this.setState({msg: event.target.value})
        console.log(this.state.msg)
    }

    showOver = () => {
        this.setState({show: !this.state.show});
    }





    render () {
        var data = {
            msg: this.state.msg,
            user: this.props.user
        };

        return (
            <div>
                {console.log("in here")}
                <button style={{border: "none", borderRadius: 0}} className="btn btn-success" onClick={this.showOver}>Kontakt aufnehmen</button>
                <div style={{textAlign: "right"}}>
                    <input style={{marginTop: 15, borderRadius: 0, width: "100%"}} type="text" hidden={this.state.show} placeholder="Schreibe eine Nachricht an den Verkäufer ..." onChange={(event) => this.handleMessage(event)}/>
                    <button hidden={this.state.show} style={{border: "none", borderRadius: 0, marginTop: 5, backgroundColor: "rgba(95,183,96,1", color: "white",}}
                            onClick={() => {}
                    }>Senden</button>
                </div>
            </div>
        );
    }
}

export default MsgComponent