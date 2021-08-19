import React from 'react';
import { HeaderWrapper, Logo, WrapperContainer, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators} from './store'
const Header = (props) => {
    return (
        < HeaderWrapper >
            <WrapperContainer>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition in={props.focused} timeout={200} classNames="slide">
                            <NavSearch className={props.focused ? 'focused' : ''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe64d;</i>
                    </SearchWrapper>
                    <Addition>
                        <Button className="writing">
                            <i className="iconfont">&#xe7c2;</i>
                            写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </WrapperContainer>
        </HeaderWrapper >
    )
}


const mapStateToProps = (state) => { // state是最外层的store里面的数
    return {
        focused: state.header.get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);