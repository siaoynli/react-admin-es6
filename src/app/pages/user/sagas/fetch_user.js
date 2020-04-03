/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-03 16:43:32
 * @Description:
 */
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from '../redux/contants'
import { takeLatest, put, call } from 'redux-saga/effects'
import axios from '../../../common/axios'

function* fetch_user() {
  try {
    //call 发送 api 请求
    const response = yield call(axios.get, 'http://2020.yxqtbbs.com/api/v1/top/users')
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data })
  } catch (e) {
    yield put({ type: FETCH_USER_FAIL })
  }
}

function* user() {
  //只会触发最后一次 dispatch；例如：点击一个新增的按钮，2s 后触发新增动作，在2s内不断点击按钮，这时候，只有最后一次点击是有效的。
  yield takeLatest(FETCH_USER_REQUEST, fetch_user)
}

const userSaga = [user()]

export default userSaga
