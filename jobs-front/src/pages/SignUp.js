import React, { useState, useContext } from 'react'
import { TextField, Button, Typography, CircularProgress } from '@material-ui/core'
import { signUp } from '../firebase'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)

  const { currentUser } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const user = { email, password, firstName, lastName}
    if (password === confirmPassword) {
      try {
        signUp(user)
      } catch (error) {
        setLoading(false)
        console.log(error)
        // TODO set alert
      }
    } else {
      // TODO set alert
      setLoading(false)
      console.log('passwords dont match')
    }
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

  const spinnerStyle = {
    height: 24,
    width: 24
  }

  return (
    <>
    {Redirect}
    <form style={formStyle} noValidate>
      <TextField style={inputStyle} label={`Email`} value={email} onChange={e => setEmail(e.target.value)} /><br/>
      <TextField style={inputStyle} type='password' label={`Password`} value={password} onChange={e => setPassword(e.target.value)} /><br/>
      <TextField style={inputStyle} type='password' label={`Confirm Password`} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /><br/>
      <TextField style={inputStyle} label={`First Name`} value={firstName} onChange={e => setFirstName(e.target.value)} /><br/>
      <TextField style={inputStyle} label={`Last Name`} value={lastName} onChange={e => setLastName(e.target.value)} /><br/>
      <Button color='primary' variant='contained' onClick={handleSubmit}>{loading ? <CircularProgress style={spinnerStyle}/> : 'Submit'}</Button>
    </form>
    <Typography variant='body1'>Not signed up? <Link to='/signin'>Sign in</Link></Typography>
    </>
  )
}

export default withRouter(SignUp)
