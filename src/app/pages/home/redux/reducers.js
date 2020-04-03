/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-03 16:18:05
 * @Description:
 */

import { INCREMENT } from './contants'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}

export default reducer
