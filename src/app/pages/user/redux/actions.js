/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-03 16:41:10
 * @Description:
 */
import { FETCH_USER_REQUEST, DELETE_USER_REQUEST } from './contants'

export const fetch_user = () => ({
  type: FETCH_USER_REQUEST
})

export const delete_user = user => ({
  type: DELETE_USER_REQUEST,
  user: user
})
