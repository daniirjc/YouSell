import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import store from '../stores';
import Background from '../Assets/account_pic.png'

class MessageHistoryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: store.userStore.name.get()
        }
    }

    scrollToBottom = () => {
        if (typeof this.messagesEnd !== 'undefined') {
            this.messagesEnd.scrollIntoView({ behavior: "instant", block: "end", inline: "nearest" });
        }
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    htmlSender = (item) => {
        return (
            <div className="col-sm-12 message-main-sender">
                <div className="sender">
                    <div className="message-text">
                        {item.message.trim()}
                    </div>
                    <span className="message-time pull-right">{item.sentAt.split(' ')[1].slice(0, 5)}</span>
                </div>
            </div>
        );
    }

    htmlReceiver = (item) => {
        return (
            <div className="col-sm-12 message-main-receiver">
                <div className="receiver">
                    <div className="message-text">
                        {item.message}
                    </div>
                    <span className="message-time pull-right">{item.sentAt.split(' ')[1].slice(0, 5)}</span>
                </div>
            </div>
        );
    }

    htmlHeader = (partner) => {
        return (<div className="row heading">
            <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div className="heading-avatar-icon">
                    <img src={Background} style={{ border: "solid", borderWidth: 1, alignItems: "flex-start" }} className="img-circle" />
                </div>
            </div>
            <div className="col-sm-8 col-xs-7 heading-name">
                <h2 className="heading-name-meta" style={{ marginLeft: 25, marginTop: 5 }}>{partner}</h2>
            </div>
        </div>);
    }

    render() {
        return (
            <div>
                {
                    typeof this.props.partner !== 'undefined'
                        ? this.htmlHeader(this.props.partner)
                        : <div></div>
                }
                {
                    typeof this.props.history !== 'undefined'
                        ? this.props.history.map(item => {
                            return (
                                <div className="row message-body" >
                                    {
                                        item.receiver !== this.state.user
                                            ? this.htmlSender(item)
                                            : this.htmlReceiver(item)
                                    }
                                    <div style={{ float: "left", clear: "both" }}
                                        ref={el => this.messagesEnd = el}>
                                    </div>
                                </div>
                            );
                        })
                        : <div></div>
                }
            </div>
        );
    }
}

export default MessageHistoryComponent;