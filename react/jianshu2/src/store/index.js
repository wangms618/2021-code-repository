import {
  createStore
} from "redux";
import reducer from "./reducer";
// reducer要生效的话需要放入createStore
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store