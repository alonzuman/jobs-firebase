import React, { useState } from 'react'
import { TextField, Button, Typography } from '@material-ui/core'
import app from '../firebase'
import { useHistory, Link, Redirect } from 'react-router-dom'
import { db } from '../firebase'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      // TODO set validation for weak password
    } else {
      const user = {
        email,
        firstName,
        lastName,
        role: 1
      }

      try {
        const res = await app.auth().createUserWithEmailAndPassword(email, password)
        // TODO set redux state to is auth and set token
        localStorage.setItem('token', res.user.refreshToken)
        await db.collection('users').doc(res.user.uid).set({ user })
        history.push('/')
      } catch (error) {
        // TODO set alert
        console.log(error)
      }
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
    {Redirect}
    <form style={formStyle} noValidate>
      <TextField style={inputStyle} label={`Email`} value={email} onChange={e => setEmail(e.target.value)} /><br/>
      <TextField style={inputStyle} type='password' label={`Password`} value={password} onChange={e => setPassword(e.target.value)} /><br/>
      <TextField style={inputStyle} type='password' label={`Confirm Password`} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /><br/>
      <TextField style={inputStyle} label={`First Name`} value={firstName} onChange={e => setFirstName(e.target.value)} /><br/>
      <TextField style={inputStyle} label={`Last Name`} value={lastName} onChange={e => setLastName(e.target.value)} /><br/>
      <Button color='primary' variant='contained' onClick={handleSubmit}>Submit</Button>
    </form>
    <Typography variant='p'>Not signed up? <Link to='/signin'>Sign in</Link></Typography>
    </>
  )
}

export default SignUp
