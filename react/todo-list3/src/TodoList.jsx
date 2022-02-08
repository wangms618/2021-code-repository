import React, { Component } from 'react'
// import store from './store'
import { connect } from 'react-redux'
export class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.props.inputValue} onChange={this.props.changeInputValue} />
          <button>提交</button>
        </div>
        <ul>
          <li>123</li>
          <li>345</li>
        </ul>
      </div>
    )
  }
  handleInputChange(e) {
    console.log(e.target.value);
  }
}


// 取数据
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

// 存数据
// store.dispatch
const mapDispatchToprops = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
      console.log(e.target.value);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToprops)(TodoList)
