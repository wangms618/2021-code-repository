// import React, { Component } from 'react'
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
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
//       count: this.state.count++
//     })
//   }
// }
// export default App


import React, { useState } from 'react';
function App() {
  const [name, setName] = useState('虾米')
  const [age, setSAge] = useState(20)
  const [sex, setSex] = useState('男')
  return (
    <div>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>性别：{sex}</p>
    </div>
  )
}
export default App