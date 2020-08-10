import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../theme'
import { Box, Avatar, MenuItem, Menu, Switch } from '@material-ui/core'
import { useState } from 'react';
import { toggleTheme } from '../actions'
import { useDispatch, useSelector } from 'react-redux';

const TopMenu = ({ onSignout }) => {
  const dispatch = useDispatch()
  const localTheme = useSelector(state => state.theme.theme)
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const boxStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '.25rem',
    justifyContent: 'space-between',
    maxWidth: 80,
    backgroundColor: theme.palette.grey[500],
    borderRadius: '2rem',
    cursor: 'pointer'
  }

  const avatarStyle = {
    height: 32,
    width: 32
  }

  const menuIconStyle = {
    margin: '0 .5rem'
  }

  const handleClick = e => {
    setMenuOpen(true)
    setAnchorEl(e.currentTarget)
  }

  const handleClose = e => {
    setMenuOpen(false)
    setAnchorEl(null)
  }

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <>
    <Box onClick={handleClick} style={boxStyle} clickable>
      <Avatar style={avatarStyle} alt='TODO' src='TODO' />
      <MenuIcon style={menuIconStyle} />
    </Box>
    <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
      <MenuItem>Edit Profile</MenuItem>
      <MenuItem onClick={() => onSignout()}>Sign out</MenuItem>
    </Menu>
    <Switch checked={localTheme === 'dark'} onChange={handleThemeToggle} color='default'/>
    </>
  )
}

export default TopMenu
