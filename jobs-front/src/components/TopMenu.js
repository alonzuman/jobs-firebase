import React, { useContext } from 'react'
import { Avatar, MenuItem, Menu, Switch, IconButton } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { useState } from 'react';
import { signOut } from '../firebase';
import { AuthContext } from '../contexts/Auth';

const TopMenu = () => {
  const { currentUser, userProfile } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

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
      {userProfile && <Avatar alt={userProfile.firstName} src={userProfile.avatar} />}
      {!userProfile && <Skeleton variant='circle' height={40} width={40} />}
    </IconButton>
    <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
      <MenuItem>Edit Profile</MenuItem>
      <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
    </Menu>
    </>
  )
}

export default TopMenu
