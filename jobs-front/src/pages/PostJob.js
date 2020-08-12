import React, { useState } from 'react'
import { Dialog, TextField, Button, DialogTitle, CircularProgress, IconButton } from '@material-ui/core'
import { postJob } from '../firebase'

const PostJob = ({ open, onClose }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [contact, setContact] = useState('')
  const [requirements, setRequirements] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const job = {
      title,
      description,
      location,
      contact,
      requirements
    }
    setLoading(true)
    try {
      postJob(job)
      // TODO set alert
      setLoading(false)
      setTitle('')
      setDescription('')
      setLocation('')
      setContact('')
      setRequirements([])
      onClose(true)
    } catch (error) {
      setLoading(false)
      console.log(error)
      // TODO set alert
    }
  }

  const inputStyle = {
    width: '100%'
  }

  const formStyle = {
    width: '100%',
    padding: '1rem'
  }

  const spinnerStyle = {
    width: 24,
    height: 24
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Post a new job</DialogTitle>
      <IconButton>hi</IconButton>
      <form onSubmit={handleSubmit} style={formStyle} noValidate>
        <TextField onChange={e => setTitle(e.target.value)} value={title} style={inputStyle} label='Company name' /><br />
        <TextField onChange={e => setDescription(e.target.value)} value={description} style={inputStyle} label='Description' /><br />
        <TextField onChange={e => setLocation(e.target.value)} value={location} style={inputStyle} label='Location' /><br />
        <TextField onChange={e => setContact(e.target.value)} value={contact} style={inputStyle} label='Contact' /><br />
        <TextField onChange={e => setRequirements(['hi', 'bye', 'guy'])} value={requirements} style={inputStyle} label='Requirements' /><br />
        <Button type='submit' color='primary' variant='contained'>{loading ? <CircularProgress style={spinnerStyle} /> : 'Submit'}</Button>
      </form>
    </Dialog>
  )
}

export default PostJob
