import React, { Component, Fragment } from 'react';

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['学习', 'good']
    }
  }
  handleInputChange(e) {
    // console.log(this);
    // this.state.inputValue = e.target.value
    // 用setState才实现响应式
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    // this.state.list.push(this.state.inputValue)
    // console.log(this.state.list);
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })

  }
  handleItemDelete(index) {
    // console.log(index);
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {/* for循环，必须要用map，因为map会返回一个数组出来，再用li数组去拼接到ul */}
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
