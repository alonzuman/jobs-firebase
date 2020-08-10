export const setUser = (user) => async dispatch => {
  dispatch({
    type: 'SET_USER',
    payload: user
  })
}

export const signOut = () => async dispatch => {
  dispatch({
    type: 'SIGN_OUT'
  })
  dispatch(setUser())
}

export const signIn = (user) => async dispatch => {
  dispatch({
    type: 'SIGN_IN',
    payload: user
  })
  dispatch(setUser())
}
