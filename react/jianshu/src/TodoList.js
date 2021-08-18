import React, {
  Component
} from 'react'
import axios from 'axios';
import 'antd/dist/antd.css';
import store from './store/index.js';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  initListAction,
  getInitList
  // getTodoList
} from './store/actionsCreaters'
import TodoListUI from './TodoListUI.jsx';
// import axios from 'axios';
class TodoList extends Component {
  constructor(props) {
    super(props)
    // 取数据源的数据
    console.log(store.getState());
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange) // 响应式取store数据
  }
  componentDidMount() { // 生命周期
    // axios.get('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/hot')
    //   .then((res) => {
    //     const action = initListAction(res.data.movieList)
    //     store.dispatch(action)
    //     console.log(action);
    //   })
    // const action = getTodoList()
    // store.dispatch(action) // action是函数时该函数内部就有dispatch参数
    const action = getInitList()
    console.log(action);
    store.dispatch(action)
  }
  render() {
    return ( <TodoListUI inputValue = {
        this.state.inputValue
      }
      handleInputChange = {
        this.handleInputChange
      }
      handleBtnClick = {
        this.handleBtnClick
      }
      list = {
        this.state.list
      }
      handleItemDelete = {
        this.handleItemDelete
      } >
      </TodoListUI>
    )
  }
  handleInputChange(e) {
    // 创建一个action
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    // dispatch会使action被store感知到
    store.dispatch(action)
    // console.log(e.target.value);
  }
  // 监听store数据变化
  handleStoreChange() {
    // store.getState()
    this.setState(store.getState())
  }
  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM,
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList