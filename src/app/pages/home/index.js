import React, { Component } from 'react'
import './styles/index.less'
import { Button } from 'antd'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { increment, increment_async } from './redux/actions'

class Home extends Component {
  render() {
    const { increment, number, increment_async } = this.props
    return (
      <div className="container">
        <p>当前数字:{number}</p>
        <Button type="primary" onClick={increment}>
          +
        </Button>
        &nbsp; &nbsp;
        <Button type="primary" onClick={increment_async}>
          异步 +
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    number: state.homeReducer
  }
}
const mapStateToDispatch = dispatch => bindActionCreators({ increment, increment_async }, dispatch)

export default connect(mapStateToProps, mapStateToDispatch)(Home)
