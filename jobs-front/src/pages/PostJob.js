import React, { useState } from 'react'
import { Dialog, Typography, TextField, Button, DialogTitle } from '@material-ui/core'
import { db } from '../firebase'

const PostJob = ({ open, onClose }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [contact, setContact] = useState('')
  const [requirements, setRequirements] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    console.log('posting a new job')
    try {
      db.collection('jobs').add({
        title,
        description,
        location,
        contact,
        requirements
      })
      // TODO set alert
      // TODO set loading
      onClose(true)
    } catch (error) {
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

  const isDisabled = () => {
    if (title.length >= 5 && description.length <= 5 && location.length <= 5 && contact.length <= 5) return true
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Post a new job</DialogTitle>
      <form onSubmit={handleSubmit} style={formStyle} noValidate>
        <TextField error={title.length <= 5} required onChange={e => setTitle(e.target.value)} value={title} style={inputStyle} label='Company name' /><br />
        <TextField error={description.length <= 5} required onChange={e => setDescription(e.target.value)} value={description} style={inputStyle} label='Description' /><br />
        <TextField error={location.length <= 5} required onChange={e => setLocation(e.target.value)} value={location} style={inputStyle} label='Location' /><br />
        <TextField error={contact.length <= 5} required onChange={e => setContact(e.target.value)} value={contact} style={inputStyle} label='Contact' /><br />
        <TextField required onChange={e => setRequirements(['hi', 'bye', 'guy'])} value={requirements} style={inputStyle} label='Requirements' /><br />
        <Button disabled={!isDisabled()} type='submit' color='primary' variant='contained'>Submit</Button>
      </form>
    </Dialog>
  )
}

export default PostJob
