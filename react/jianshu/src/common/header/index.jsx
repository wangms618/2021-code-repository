import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, WrapperContainer,NavItem } from './style'
export class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <WrapperContainer>
          <Logo />
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
          </Nav>
        </WrapperContainer>
      </HeaderWrapper>
    )
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
