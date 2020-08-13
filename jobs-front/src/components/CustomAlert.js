import React, { useReducer, useEffect, useState } from 'react'
import { Alert } from '@material-ui/lab'
import { alertReducer } from '../reducers/Alert'

const CustomAlert = () => {
  const [isOn, setIsOn] = useState(false)
  const [msg, setMsg] = useState('')
  const [type, setType] = useState('')

  const initialState = {
    isOn,
    msg,
    type
  }

  const [state, dispatch] = useReducer(alertReducer, initialState)

  useEffect(() => {
    console.log(initialState)
  }, [state])
  console.log(state)

  const alertContainerStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 999,
    bottom: '1rem'
  }

  return (
    <div style={alertContainerStyle}>
      {state.isOn === true && <Alert severity={state.type}>{state.msg}</Alert>}
    </div>
  )
}

export default CustomAlert
