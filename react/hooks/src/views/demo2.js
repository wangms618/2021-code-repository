// import React, { Component } from 'react'
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }
//   componentDidMount() {
//     console.log(`componentDidMount => 你点击了 ${this.state.count}`);
//   }
//   componentDidUpdate() {
//     console.log(`componentDidMount => 你点击了 ${this.state.count}`);
//   }
//   render() {
//     return (
//       <div>
//         <p>你点击了{this.state.count}次</p>
//         <button onClick={this.add.bind(this)}>click me</button>
//       </div>
//     )
//   }

//   add() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
// }
// export default App

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, link, Link } from 'react-router-dom'
function Demo() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`你点击了${count}次`);
    return () => {
      console.log('点击-----------------------------');
    }
  }, [count])
  return (
    <div>
      <p>点击次数{count}</p>
      <button onClick={() => { setCount(count + 1) }}>click</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  )
}
function Home() {
  useEffect(() => {
    console.log('这里是首页home');
    // return 会在这个组件被卸载前执行
    return () => {
      console.log('离开home页面');
    }
  })
  return <h2>首页</h2>
}
function List() {
  useEffect(() => {
    console.log('这里是列表页List');
    return () => {
      console.log('离开list页面');
    }
  })
  return <h2>列表页</h2>
}
export default Demo
