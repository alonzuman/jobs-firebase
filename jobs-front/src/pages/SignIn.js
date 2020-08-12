import React, { useState, useContext } from 'react'
import { TextField, Button, Typography, CircularProgress } from '@material-ui/core'
import { signIn } from '../firebase'
import { useHistory, Link, withRouter, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { currentUser } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const user = { email, password }
    try {
      await signIn(user)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      // TODO set alert
    }
  }

  const formStyle = {
    width: '100%'
  }

  const inputStyle = {
    width: '100%',
    margin: '.5rem 0'
  }

  const spinnerStyle = {
    width: 24,
    height: 24
  }

  if (currentUser) {
    return <Redirect to='/' />
  }

  return (
    <>
      <form style={formStyle} noValidate>
        <TextField style={inputStyle} label={`Email`} value={email} onChange={e => setEmail(e.target.value)} /><br />
        <TextField style={inputStyle} type='password' label={`Password`} value={password} onChange={e => setPassword(e.target.value)} /><br />
        <Button color='primary' variant='contained' onClick={handleSubmit}>{loading ? <CircularProgress style={spinnerStyle}/> : 'Submit' }</Button>
      </form>
      <br />
      <Typography variant='body1'>Not signed up? <Link to='/signup'>Sign up</Link></Typography>
    </>
  )
}

export default withRouter(SignIn)
