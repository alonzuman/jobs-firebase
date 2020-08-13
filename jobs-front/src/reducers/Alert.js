export const alertReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_ALERT':
      return {
        isOn: true,
        msg: payload.msg,
        type: payload.type
      }
    case 'REMOVE_ALERT':
      return {
        isOn: false,
        msg: '',
        type: ''
      }
    default: return state
  }
}
