import React, { Component } from 'react';
import ENV from '../api/env';
import { socketConnect } from 'socket.io-react';
import store from '../stores';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class MsgComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: true,
            msg: '',
        }
    }

    handleMessage = (event) => {
        this.setState({ msg: event.target.value });
    }

    showOver = () => {
        this.setState({ show: !this.state.show });
    }

    sendMsg = () => {
        let message = this.state.msg;

        store.socketStore.sendMessage({
            msg: message,
            from: store.userStore.name.get(),
            to: this.props.user
        });

        this.setState({
            msg: '',
            show: false
        });
        this.showNotification();
    }

    showNotification = () => {
        return NotificationManager.success('Message was successfully sent to ' + this.props.user + '.', 'Message sent!');
    }

    render() {
        let data = {
            msg: this.state.msg,
            user: this.props.user
        };

        return (
            <div>
                <button style={{ border: "none", borderRadius: 0 }} className="btn btn-success" onClick={this.showOver}>Kontakt aufnehmen</button>
                <div style={{ textAlign: "right" }}>
                    <input style={{ marginTop: 15, borderRadius: 0, width: "100%" }} type="text" hidden={this.state.show} placeholder="Schreibe eine Nachricht an den Verkäufer ..." onChange={(event) => this.handleMessage(event)} />
                    <button hidden={this.state.show} style={{ border: "none", borderRadius: 0, marginTop: 5, backgroundColor: "rgba(95,183,96,1", color: "white", }}
                        onClick={this.sendMsg}>Senden</button>
                </div>
            </div>
        );
    }
}

export default MsgComponent