import { INCREMENT, INCREMENT_ASYNC } from '../redux/contants'

import { takeEvery, delay, put } from 'redux-saga/effects'

function* increment() {
  yield delay(1000)
  yield put({ type: INCREMENT })
}

function* add() {
  yield takeEvery(INCREMENT_ASYNC, increment)
}

const counterSaga = [add()]

export default counterSaga
