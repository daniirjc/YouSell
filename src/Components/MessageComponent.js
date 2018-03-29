import React, { Component } from 'react'
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements';
import "../Styles/message.css"
import * as axios from 'axios';
import store from '../stores';
import ENV from '../api/env';
import Background from '../Assets/account_pic.png';
import MsgHistoryComponent from './MessageHistoryComponent';

class MessageComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            converastions: [],
            activeChat: '',
            selectedPartner: '',
            message: ''
        };
    }

    componentWillMount() {
        const url = ENV.host + '/chat/all'
        this.fetchMsgData(url);
    }

    fetchMsgData = async (url) => {
        let res = await axios.post(url, {
            user: store.userStore.name.get()
        });

        this.setState({
            messages: res.data.history,
            converastions: res.data.conv
        });
    }

    changeActiveChat = (unused, e, p) => {
        this.setState({
            activeChat: e,
            selectedPartner: p
        });
    }

    sendMessage = () => {
        store.socketStore.sendMessage({
            msg: this.state.message,
            from: store.userStore.name.get(),
            to: this.state.selectedPartner
        });
        this.setState({message: ""});
    }

    handleInput = (event) => {
        this.setState({message: event.target.value})
    }

    render() {
        return (
            <div className="row app-one" style={{ height: "100%", width: "100%", overflow: "hidden", marginLeft: 0 }}>
                <div className="col-sm-4 side">
                    <div className="side-one">
                        <div className="row sideBar">
                            {
                                this.state.converastions.map((item, i) => {
                                    return (
                                        <div className="row sideBar-body" onClick={this.changeActiveChat.bind(this, i, item._id, item.partner)}>
                                            <div className="col-sm-3 col-xs-3 sideBar-avatar">
                                                <div className="avatar-icon">
                                                    <img src={Background} style={{ border: "solid", borderWidth: 1, alignItems: "flex-start" }} className="img-circle" />
                                                </div>
                                            </div>
                                            <div className="col-sm-9 col-xs-9 sideBar-main">
                                                <div className="row">
                                                    <div className="col-sm-8 col-xs-8 sideBar-name">
                                                        <span className="name-meta">{item.partner}</span>
                                                    </div>
                                                    <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                                        <span className="time-meta pull-right">{item.Date.day}.{item.Date.month}.{item.Date.year[2]}{item.Date.year[3]}</span>
                                                        <span className="time-meta pull-right">{item.Date.hours}:{item.Date.minutes}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-8 conversation">
                    <div className="row message" id="conversation">
                        <MsgHistoryComponent history={this.state.messages[this.state.activeChat]} partner={this.state.selectedPartner} />
                    </div>
                    <div className="row reply" style={{ marginTop: '15; !important' }}>
                        <div className="col-sm-1 col-xs-1 reply-emojis">
                            <i className="far fa-smile"></i>
                        </div>
                        <div className="col-sm-9 col-xs-9 reply-main">
                            <textarea className="form-control" rows="1" id="comment" onChange={this.handleInput} value={this.state.message}/>
                        </div>
                        <div className="col-sm-1 col-xs-1 reply-send">
                            <i className="glyphicon glyphicon-send" onClick={this.sendMessage} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageComponent;