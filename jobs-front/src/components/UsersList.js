import React, { useState, useEffect } from 'react'
import { getUsers } from '../firebase'
import { CircularProgress, Grid } from '@material-ui/core'
import UserCard from './UserCard'

const UsersList = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    setLoading(true)
    const data = await getUsers()
    setUsers(data)
    setLoading(false)
  }

  useEffect(() => { fetchUsers() }, [])

  return (
    <Grid container>
      {loading && <CircularProgress />}
      {!loading && users.map((user, index) => <Grid key={index} sm={12} item><UserCard key={index} user={user} /></Grid>)}
    </Grid>
  )
}

export default UsersList
