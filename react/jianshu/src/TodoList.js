import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index.js';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
import { getInputChangeAction,getAddItemAction,getDeleteItemAction } from './store/actionsCreaters'

class TodoList extends Component {
  constructor(props) {
    super(props)
    // 取数据源的数据
    console.log(store.getState());
    this.state = store.getState()
    this.hendleInputChange = this.hendleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange) // 响应式取store数据
  }
  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input type="text" onChange={this.hendleInputChange} value={this.state.inputValue} style={{ width: '300px', marginRight: '10px' }} placeholder="todo info" />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
  hendleInputChange(e) {
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