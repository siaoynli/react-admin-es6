/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-03 16:18:16
 * @Description:
 */

import { INCREMENT, INCREMENT_ASYNC } from './contants'

export const increment = () => ({
  type: INCREMENT
})

export const increment_async = () => ({
  type: INCREMENT_ASYNC
})
