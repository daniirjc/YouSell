import {observable, action} from 'mobx'
import io from 'socket.io-client';
import ENV from "../api/env";

class SocketStore {
    //socket = io.connect(ENV.host + ':' + ENV.port);
}

export default SocketStore;