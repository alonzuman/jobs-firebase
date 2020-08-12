import React from 'react'
import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, Button } from '@material-ui/core'

const JobCard = ({ job }) => {
  return (
  <Card>
    <CardHeader
      avatar={<Avatar src={job.avatar || ''} alt={job.firstName} />}
      title={job.firstName}
    />
    <CardContent>
      <Typography variant='body2'>
        {job.description}
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

export default JobCard
