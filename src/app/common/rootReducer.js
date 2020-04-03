/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-03 14:52:54
 * @Description:
 */

import { combineReducers } from 'redux'

import homeReducer from '../pages/home/redux/reducers'
import userReducer from '../pages/user/redux/reducers'

export default combineReducers({
  homeReducer,
  userReducer
})
