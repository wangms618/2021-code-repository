import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['学习', 'react']
    }
  }
  handleInputChange(e) {
    // 取input框里的值
    // console.log(e.target.value);
    // console.log(this.state.inputValue);
    // 响应式
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    // this.state.list.push(this.state.inputValue)
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
    this.state.inputValue = ''
  }
  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    console.log(index);
    this.setState({
      list
    })
  }


  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea" className="input" type="text" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {/* 返回一个新的数组 */}
          {
            this.state.list.map((item, index) => {
              return (
                // <li key={index} onClick={this.handleItemDelete.bind(this, index)} dangerouslySetInnerHTML={{ __html: item }}></li>
                <TodoItem DeleteItem={this.handleItemDelete.bind(this)} key={index} content={item} index={index} />

              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}
export default TodoList