import React from 'react'
import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, Button, Grid, ListItem } from '@material-ui/core'

const JobCard = ({ job }) => {
  return (
  <Grid xs={12} md={6} item>
      <Card className='card'>
      <CardHeader
        avatar={<Avatar src={job.imageUrl || ''} alt={job.title} />}
        title={job.title}
      />
      <CardContent>
        <Typography variant='body2'>
          {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button'>
          Contact
          </Button>
      </CardActions>
    </Card>
  </Grid>
  )
}

export default JobCard
