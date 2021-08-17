import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index.js';
// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];
class TodoList extends Component {
  constructor(props) {
    super(props)
    // 取数据源的数据
    console.log(store.getState());
    this.state = store.getState()
    this.hendleInputChange = this.hendleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange) // 响应式取store数据
  }
  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input type="text" onChange={this.hendleInputChange} value={this.state.inputValue} style={{ width: '300px', marginRight: '10px' }} placeholder="todo info" />
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
  hendleInputChange(e) {
    // 创建一个action
    const action = {
      type: 'change_input_value',
      value:e.target.value
    }
    // dispatch会使action被store感知到
    store.dispatch(action)
    // console.log(e.target.value);
  }
  // 监听store数据变化
  handleStoreChange() {
    // store.getState()
    this.setState(store.getState())
  }
}

export default TodoList