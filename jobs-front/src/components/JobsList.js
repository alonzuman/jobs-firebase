import React, { useState, useEffect } from 'react'
import { getJobs } from '../firebase'
import { CircularProgress } from '@material-ui/core'
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
    <div>
      {loading && <CircularProgress />}
      {!loading && jobs.map((job, index) => <JobCard key={index} job={job} />)}
    </div>
  )
}

export default JobsList
