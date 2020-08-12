import React from 'react'
import theme from '../theme'
import { Box, Avatar, MenuItem, Menu, Switch, IconButton } from '@material-ui/core'
import { useState } from 'react';
import { signOut } from '../firebase';

const TopMenu = ({ onSignout }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const avatarStyle = {
    height: 32,
    width: 32
  }

  const handleClick = e => {
    setMenuOpen(true)
    setAnchorEl(e.currentTarget)
  }

  const handleClose = e => {
    setMenuOpen(false)
    setAnchorEl(null)
  }

  return (
    <>
    <IconButton onClick={handleClick}>
      <Avatar style={avatarStyle} alt='TODO' src='TODO' />
    </IconButton>
    <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
      <MenuItem>Edit Profile</MenuItem>
      <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
    </Menu>
    </>
  )
}

export default TopMenu
