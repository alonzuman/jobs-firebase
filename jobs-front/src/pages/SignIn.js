import React, { useState } from 'react'
import { TextField, Button, Typography } from '@material-ui/core'
import app from '../firebase'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signIn } from '../actions/auth'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await app.auth().signInWithEmailAndPassword(email, password)
      // TODO set redux state to is auth
      localStorage.setItem('token', res.user.refreshToken)
      dispatch(signIn(res.user))
      history.push('/')
    } catch (error) {
      // TODO set alert
      console.log('error')
    }
  }

  const formStyle = {
    width: '100%'
  }

  const inputStyle = {
    width: '100%',
    margin: '.5rem 0'
  }

  return (
    <>
      <form style={formStyle} noValidate>
        <TextField style={inputStyle} label={`Email`} value={email} onChange={e => setEmail(e.target.value)} /><br />
        <TextField style={inputStyle} type='password' label={`Password`} value={password} onChange={e => setPassword(e.target.value)} /><br />
        <Button color='primary' variant='contained' onClick={handleSubmit}>Submit</Button>
      </form>
      <br />
      <Typography variant='p'>Not signed up? <Link to='/signup'>Sign up</Link></Typography>
    </>
  )
}

export default SignIn
