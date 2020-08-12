import React, { useState, useContext } from 'react'
import { TextField, Button, Typography } from '@material-ui/core'
import { signIn } from '../firebase'
import { useHistory, Link, withRouter, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { currentUser } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    const user = { email, password }
    await signIn(user)
  }

  const formStyle = {
    width: '100%'
  }

  const inputStyle = {
    width: '100%',
    margin: '.5rem 0'
  }

  if (currentUser) {
    return <Redirect to='/' />
  }

  return (
    <>
      <form style={formStyle} noValidate>
        <TextField style={inputStyle} label={`Email`} value={email} onChange={e => setEmail(e.target.value)} /><br />
        <TextField style={inputStyle} type='password' label={`Password`} value={password} onChange={e => setPassword(e.target.value)} /><br />
        <Button color='primary' variant='contained' onClick={handleSubmit}>Submit</Button>
      </form>
      <br />
      <Typography variant='body1'>Not signed up? <Link to='/signup'>Sign up</Link></Typography>
    </>
  )
}

export default withRouter(SignIn)
