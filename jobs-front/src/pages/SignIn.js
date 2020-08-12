import React, { useState, useContext } from 'react'
import { TextField, Button, Typography, CircularProgress, Paper } from '@material-ui/core'
import { signIn } from '../firebase'
import { useHistory, Link, withRouter, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'
import theme from '../theme'

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

  const anchorStyle = {
    textDecoration: 'none',
    color: theme.palette.primary.main
  }

  if (currentUser) {
    return <Redirect to='/' />
  }

  return (
    <>
      <form className='form-container' noValidate>
        <Typography variant='h1'>Sign Up</Typography>
        <br />
        <TextField variant='outlined' className='text-input' label={`Email`} value={email} onChange={e => setEmail(e.target.value)} /><br />
        <TextField variant='outlined' className='text-input' type='password' label={`Password`} value={password} onChange={e => setPassword(e.target.value)} /><br />
        <Button className='button' color='primary' variant='contained' onClick={handleSubmit}>{loading ? <CircularProgress className='small-spinner'/> : 'Submit' }</Button>
        <br />
        <br />
        <Typography variant='body1'>Not signed up? <Link style={anchorStyle} to='/signup'>Sign up</Link></Typography>
      </form>
      <br />
    </>
  )
}

export default withRouter(SignIn)
