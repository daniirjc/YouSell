import ENV from "../api/env";
import { observable } from 'mobx';

class SocketStore {
    socket = require('socket.io-client')(ENV.host);
    newMessages = observable(false)

    triggerMsg = () => {
        this.socket.on("msg", () => {
            this.newMessages.set(true);
        })
    }

    ackUser = (user) => {
        this.socket.emit('ack user', { name: user });
    }

    sendMessage = (msg) => {
        this.socket.emit('private msg', msg);
    }

}

export default SocketStore;

