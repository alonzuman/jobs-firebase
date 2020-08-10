const initialState = {
  msg: '',
  isOn: false
}

export const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_ALERT':
      return {
        msg: payload,
        isOn: true
      }
    case 'REMOVE_ALERT':
      return {
        msg: '',
        isOn: false
      }
  }
}
