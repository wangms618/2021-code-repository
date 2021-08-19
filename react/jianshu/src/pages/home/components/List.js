import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
class List extends Component {
  render() {
    return (
      <div>
        <ListItem>
          <img className="pic" src="https://img0.baidu.com/it/u=1570224879,3082274194&fm=253&fmt=auto&app=120&f=JPEG?w=432&h=288" alt="" />
          <ListInfo>
            <h3>怎样判断一对夫妻的感情好不好</h3>
            <p>如果你要问我，怎样判断一对夫妻的感情好不好。我一定会这样回答你：看他们聊不聊天就知道了。</p>
          </ListInfo>
        </ListItem>
      </div>
    )
  }
}

export default List
