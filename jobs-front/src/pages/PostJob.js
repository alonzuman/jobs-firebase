import React from 'react'
import { Dialog, Typography, TextField, Button, DialogTitle } from '@material-ui/core'

const PostJob = ({ open, onClose }) => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log('postign')
  }

  const inputStyle = {
    width: '100%'
  }

  const formStyle = {
    width: '100%',
    padding: '1rem'
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Post a new job</DialogTitle>
      <form style={formStyle} noValidate>
        <TextField style={inputStyle} label='Company name' /><br />
        <TextField style={inputStyle} label='Description' /><br />
        <TextField style={inputStyle} label='Skills required' /><br />
        <TextField style={inputStyle} label='Location' /><br />
        <TextField style={inputStyle} label='Photo' /><br />
        <TextField style={inputStyle} label='Contact Phone' /><br />
        <Button color='primary' variant='contained' onClick={handleSubmit}>Submit</Button>
      </form>
    </Dialog>
  )
}

export default PostJob
