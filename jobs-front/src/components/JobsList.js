import React, { useState, useEffect } from 'react'
import { getJobs } from '../firebase'
import { CircularProgress, Grid } from '@material-ui/core'
import JobCard from './JobCard'

const JobsList = ({ posting }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchJobs = async () => {
    setLoading(true)
    const data = await getJobs()
    setJobs(data)
    setLoading(false)
  }

  useEffect(() => { fetchJobs() }, [posting])

  return (
    <Grid container>
      {loading && <CircularProgress />}
      {!loading && jobs.map((job, index) => <Grid key={index} sm={12} item><JobCard job={job} /></Grid>)}
    </Grid>
  )
}

export default JobsList
