import React, { useState, useEffect } from 'react'
import { getUsers } from '../firebase'
import { CircularProgress, Box, Container } from '@material-ui/core'
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
    <Container>
      <Box style={{overflowY: 'scroll'}}>
        {loading && <CircularProgress />}
        {!loading && users.map((user, index) => <UserCard key={index} user={user} />)}
      </Box>
    </Container>
  )
}

export default UsersList
