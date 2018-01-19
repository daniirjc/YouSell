import UserStore from './UserStore';
import ItemStore from "./ItemStore";

const userStore = new UserStore();
const itemStore = new ItemStore();

export default {
    userStore,
    itemStore
}
