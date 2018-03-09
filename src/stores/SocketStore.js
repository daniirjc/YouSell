import { observable, action } from 'mobx'
import ENV from "../api/env";

class SocketStore {
    socket = require('socket.io-client')(ENV.host + ':' + ENV.port);

    ackUser = (user) => {
        this.socket.emit('ack user', { name: user });
    }

    sendMessage = (msg) => {
        console.log(msg);
        this.socket.emit('private msg', msg);
    }
}

export default SocketStore;