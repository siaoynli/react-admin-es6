import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetch_user, delete_user } from './redux/actions'

import { Button, Popconfirm, Table } from 'antd'

class User extends Component {
  getColumns() {
    return [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <Button type="link">{text}</Button>
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email'
      },

      {
        title: '操作',
        width: 200,
        key: 'operation',
        render: (text, record) => (
          <span>
            <Button type="link" style={{ marginRight: 16 }} title={record.name}>
              编辑
            </Button>
            <Popconfirm
              title="确认要删除这条记录吗?"
              onConfirm={() => {
                this.delete(record)
              }}
              okText="是"
              cancelText="否"
            >
              <Button type="primary" loading={record.isDelete} danger>
                删除
              </Button>
            </Popconfirm>
          </span>
        )
      }
    ]
  }

  delete = user => {
    const { delete_user } = this.props
    delete_user(user)
  }

  componentDidMount() {
    const { fetch_user } = this.props
    fetch_user()
  }

  render() {
    const columns = this.getColumns()
    const { isFetch, lists, fetch_user } = this.props
    return (
      <div>
        <p style={{ padding: '10px', textAlign: 'center' }}>
          <Button type="primary" onClick={() => fetch_user()}>
            异步请求
          </Button>
        </p>
        <Table
          bordered
          columns={columns}
          dataSource={lists.data}
          loading={isFetch}
          pagination={false}
          rowKey={record => record.id}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.userReducer
})
const mapStateToDispatch = dispatch => bindActionCreators({ fetch_user, delete_user }, dispatch)

export default connect(mapStateToProps, mapStateToDispatch)(User)
