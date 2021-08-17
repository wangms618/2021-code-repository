import React from 'react';
import { Input, Button, List } from 'antd';


// 无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div>
        <Input onChange={props.handleInputChange} value={props.inputValue} type="text" style={{ width: '300px', marginRight: '10px' }} placeholder="todo info" />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => { props.handleItemDelete(index) }}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}
// 导出
export default TodoListUI
// export default class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <div>
//           <Input onChange={this.props.handleInputChange} value={this.props.inputValue} type="text" style={{ width: '300px', marginRight: '10px' }} placeholder="todo info" />
//           <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         </div>
//         <List
//           style={{ marginTop: '10px', width: '300px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={() => {this.props.handleItemDelete(index)}}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }