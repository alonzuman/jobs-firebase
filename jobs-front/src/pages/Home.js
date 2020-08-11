import React, { useState } from 'react'
import app, { db } from '../firebase'
import { useHistory } from 'react-router-dom'

// Components
import PostJob from './PostJob'
import TopMenu from '../components/TopMenu'

// Redux
import { useDispatch } from 'react-redux'
import { signOut } from '../actions/auth'

// Mui
import { Button, IconButton, Box, Typography } from '@material-ui/core'

// Icons
import AddIcon from '@material-ui/icons/Add'

const Home = () => {
  const [posting, setPosting] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSignout = () => {
    localStorage.removeItem('token')
    app.auth().signOut()
    dispatch(signOut())
    history.push('/signin')
  }

  const addButtonStyle = {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem'
  }

  const boxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <>
      <TopMenu onSignout={handleSignout} />
      <Box style={boxStyle}>
        <Typography variant='h1'>Hello</Typography>
      </Box>
      <PostJob open={posting} onClose={() => setPosting(false)} />
      <IconButton onClick={() => setPosting(true)} style={addButtonStyle}>
        <AddIcon />
      </IconButton>
    </>
  )
}

export default Home
