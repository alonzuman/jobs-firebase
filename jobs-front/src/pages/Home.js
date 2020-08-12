import React, { useState, useEffect } from 'react'
import JobsList from '../components/JobsList'

// Components
import PostJob from './PostJob'
import TopMenu from '../components/TopMenu'

// Mui
import { Button, IconButton, Box, Typography, Paper, Tabs, Tab } from '@material-ui/core'

// Icons
import AddIcon from '@material-ui/icons/Add'
import UsersList from '../components/UsersList'
import theme from '../theme'

const Home = () => {
  const [posting, setPosting] = useState(false)
  const [tabValue, setTabValue] = useState(0)

  const addButtonStyle = {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    padding: '1.3rem',
    backgroundColor: theme.palette.primary.main
  }

  const handleChange = (tab) => setTabValue(tab)

  return (
    <>
      <TopMenu />
        <Tabs centered variant='fullWidth' value={tabValue} indicatorColor="primary" textColor="primary" onChange={handleChange}>
          <Tab onClick={() => setTabValue(0)} label="Jobs" />
          <Tab onClick={() => setTabValue(1)} label="Members" />
        </Tabs>
      {tabValue === 0 && <JobsList posting={posting} />}
      {tabValue === 1 && <UsersList />}
      <PostJob open={posting} onClose={() => setPosting(false)} />
      <IconButton onClick={() => setPosting(true)} style={addButtonStyle}>
        <AddIcon />
      </IconButton>
    </>
  )
}

export default Home
