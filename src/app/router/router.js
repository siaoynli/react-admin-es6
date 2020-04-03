import React from 'react'

import { Route, Switch, Link } from 'react-router-dom'

import Home from '../pages/home'
import User from '../pages/user'

export default function Routes() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">计数器</Link>
        </li>
        <li>
          <Link to="/users">用户</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/users" component={User}></Route>
      </Switch>
    </div>
  )
}
