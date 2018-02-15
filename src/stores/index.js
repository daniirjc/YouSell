import UserStore from './UserStore';
import ItemStore from "./ItemStore";
import SocketStore from "./SocketStore";

const userStore = new UserStore();
const itemStore = new ItemStore();
const socketStore = new SocketStore();

export default {
    userStore,
    itemStore,
    socketStore
}
