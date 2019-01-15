import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { tabChange, getTopicList } from '../reduxSaga/actionCreator';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'all'
    }
  }

  componentWillMount() {
    this.setState({
      tab: this.props.tab
    })
  }

  componentWillReceiveProps(currProps, nextProps) {
    this.setState({
      tab: currProps.tab
    })
  }

  tapTab(txt) {
    this.props.tabChange(txt);
    this.props.getTopicList({
      page: 1,
      tab: txt,
      limit: 40,
      mdrender: false
    })
  }

  render() {
    const { tab } = this.state;
    return (
      <div className="header__wrap">
        <div className="header__menu">
          <div onClick={this.tapTab.bind(this, 'all')} className={tab==='all'?'active':''}><Link to="/home/all">首页</Link></div>
          <div onClick={this.tapTab.bind(this, 'good')} className={tab==='good'?'active':''}><Link to="/home/good">精华</Link></div>
          <div onClick={this.tapTab.bind(this, 'share')} className={tab==='share'?'active':''}><Link to="/home/share">分享</Link></div>
          <div onClick={this.tapTab.bind(this, 'ask')} className={tab==='ask'?'active':''}><Link to="/home/ask">问答</Link></div>
          <div onClick={this.tapTab.bind(this, 'job')} className={tab==='job'?'active':''}><Link to="/home/job">招聘</Link></div>
          <div onClick={this.tapTab.bind(this, 'dev')} className={tab==='dev'?'active':''}><Link to="/home/dev">测试</Link></div>
          <div onClick={this.tapTab.bind(this, 'login')} className={tab==='login'?'active':''}><Link to="/login">登录</Link></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    tabChange: (params) => {
      dispatch(tabChange(params))
    },
    getTopicList: (params) => {
      dispatch(getTopicList(params))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);