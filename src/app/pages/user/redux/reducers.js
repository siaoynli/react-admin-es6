/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-03 16:41:00
 * @Description:
 */

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from './contants'

import initialState from './initialState'

let users = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...initialState, isFetch: true }
    case FETCH_USER_SUCCESS:
      users = action.payload.list.data
      return { ...initialState, lists: { data: users } }
    case FETCH_USER_FAIL:
      return { ...initialState }
    case DELETE_USER_REQUEST:
      users = users.map(user => {
        if (user.id === action.user.id) {
          user.isDelete = true
        }
        return user
      })
      return { ...initialState, lists: { data: users } }
    case DELETE_USER_SUCCESS:
      users = users.filter(user => user.id !== action.user.id)
      return { ...initialState, lists: { data: users } }
    case DELETE_USER_FAIL:
      return { ...initialState }
    default:
      return state
  }
}

export default reducer
