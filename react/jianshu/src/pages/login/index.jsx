import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
import { actionCreators } from './store'

// const loginStatus = false

class Login extends Component {
  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' onChange={(e) => {this.account = e.target.value}}/>
            <Input placeholder='密码' onChange={(e) => {this.password = e.target.value}}/>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.login.get('login')
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) { // innerRef 拿到的是dom
    console.log(accountElem, passwordElem);
    dispatch(actionCreators.login(accountElem, passwordElem))
  }
})

export default connect(mapState, mapDispatch)(Login)