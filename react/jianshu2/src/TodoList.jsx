import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
// 取到store
import store from './store/index.js';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    // console.log(store.getState());
    store.subscribe(this.handleStoreChange) // 响应式取store数据
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleInputChange(e) {
    // 创建一个action
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input onChange={this.handleInputChange} value={this.state.inputValue} type="text" placeholder="todoinfo" style={{ width: '300px', marginRight: '20px' }} />
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Todolist;
