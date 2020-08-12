import React from 'react'
import SkeletonCard from './SkeletonCard'
import { Grid } from '@material-ui/core'

const SkeletonCards = () => {
  const skeletons = [1, 2, 3]

  return (
    <>
      {skeletons.map(skeleton => <SkeletonCard />)}
    </>
  )
}

export default SkeletonCards
