/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-03 17:17:35
 * @Description:
 */

import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from '../redux/contants'
import { takeEvery, put, delay } from 'redux-saga/effects'

function* delete_user(action) {
  try {
    console.log('模拟请求删除0.5秒')
    yield delay(500)
    yield put({ type: DELETE_USER_SUCCESS, user: action.user })
  } catch (e) {
    yield put({ type: DELETE_USER_FAIL })
  }
}

function* deleteUser() {
  // 每一次 dispatch 都会触发；例如：点击一个新增的按钮，2s 后触发新增动作，在2s内不断点击按钮，这时候，每一次点击，都是有效的。
  yield takeEvery(DELETE_USER_REQUEST, delete_user)
}

const userSaga = [deleteUser()]

export default userSaga
