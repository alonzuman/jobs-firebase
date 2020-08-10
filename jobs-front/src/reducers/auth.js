const initialState = {
  token: localStorage.getItem('token'),
  auth: localStorage.getItem('token') ? true : false,
  user: {},
  isLoading: false
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'AUTH_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'SET_USER':
      return {
        ...state,
        token: localStorage.getItem('token'),
        user: payload,
        auth: true,
        isLoading: false
      }
    case 'SIGN_IN':
      return {
        ...state,
        auth: true,
        isLoading: false
      }
    case 'SIGN_UP':
      return {
        ...state,
        auth: true,
        isLoading: false
      }
    case 'SIGN_OUT':
      return {
        token: '',
        auth: false,
        isLoading: false
      }
    default: return state
  }
}
