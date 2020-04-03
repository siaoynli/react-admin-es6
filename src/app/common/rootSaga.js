import { all } from 'redux-saga/effects'

import homeSaga from '../pages/home/sagas'
import userSaga from '../pages/user/sagas'

export default function* rootSaga() {
  //跟 fork 一样，同时并发多个 action，没有顺序。
  yield all([
    // 同时并发多个
    ...homeSaga,
    ...userSaga
  ])
}
