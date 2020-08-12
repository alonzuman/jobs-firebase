import React, { useState, useContext } from 'react'
import { TextField, Button, Typography, CircularProgress } from '@material-ui/core'
import { signUp } from '../firebase'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'
import theme from '../theme'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [bio, setBio] = useState('')
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(false)

  const { currentUser } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const user = {
      email,
      password,
      firstName,
      lastName,
      bio,
      skills
    }
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

  if (currentUser) {
    return <Redirect to='/' />
  }

  const anchorStyle = {
    textDecoration: 'none',
    color: theme.palette.primary.main
  }

  return (
    <>
    <form className='form-container' noValidate>
      <Typography variant='h1'>Sign Up</Typography>
      <br />
      <TextField variant='outlined' className='text-input' label={`Email`} value={email} onChange={e => setEmail(e.target.value)} /><br/>
      <TextField variant='outlined' className='text-input' type='password' label={`Password`} value={password} onChange={e => setPassword(e.target.value)} /><br/>
      <TextField variant='outlined' className='text-input' type='password' label={`Confirm Password`} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /><br/>
      <TextField variant='outlined' className='text-input' label={`First Name`} value={firstName} onChange={e => setFirstName(e.target.value)} /><br/>
      <TextField variant='outlined' className='text-input' label={`Last Name`} value={lastName} onChange={e => setLastName(e.target.value)} /><br/>
      <TextField variant='outlined' className='text-input' label={`Bio`} value={bio} onChange={e => setBio(e.target.value)} /><br/>
      <TextField variant='outlined' className='text-input' label={`Skills`} value={skills} onChange={e => setSkills(e.target.value)} /><br/>
      <Button className='button' color='primary' variant='contained' onClick={handleSubmit}>{loading ? <CircularProgress className='small-spinner' /> : 'Submit'}</Button>
      <br/>
      <br/>
      <Typography variant='body1'>Not signed up? <Link style={anchorStyle} to='/signin'>Sign in</Link></Typography>
    </form>
    </>
  )
}

export default withRouter(SignUp)
