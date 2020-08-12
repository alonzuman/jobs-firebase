import React from 'react'
import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, Button } from '@material-ui/core'

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={user.avatar || ''} alt={user.firstName} />}
        title={user.firstName}
      />
      <CardContent>
        <Typography variant='body2'>
          {user.bio && user.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          Contact
        </Button>
      </CardActions>
    </Card>
  )
}

export default UserCard
