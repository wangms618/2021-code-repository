import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
import List from './components/List'

class Home extends Component {

  componentDidMount() {
    this.props.changeHomeData()
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <List />
        </HomeLeft>
        <HomeRight>right</HomeRight>
      </HomeWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)