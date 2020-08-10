import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  // TODO validate token ffs how to do it?
  const { token } = useSelector(state => state.auth)

  return (
    <Route {...rest} render={props => token ?
      <Component  {...props} />:
      <Redirect to='/signin' />}
    />
  )
}

export default PrivateRoute
