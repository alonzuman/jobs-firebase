import React, { useState, useContext } from 'react'
import PersonalInformation from './ProfileFields/PersonalInformation'
import { AuthContext } from '../contexts/Auth'
import { Button, CircularProgress } from '@material-ui/core'
import { editUser } from '../firebase'

const EditProfile = ({ onClose }) => {
  const [loading, setLoading] = useState(false)
  const { userProfile, currentUser } = useContext(AuthContext)
  const { uid } = currentUser
  const [firstName, setFirstName] = useState(userProfile.firstName)
  const [lastName, setLastName] = useState(userProfile.lastName)
  const [phone, setPhone] = useState(userProfile.phone)
  const [bio, setBio] = useState(userProfile.bio)
  const [skills, setSkills] = useState(userProfile.skills)
  const [avatar, setAvatar] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const user = {
      firstName, lastName, phone, bio, skills, avatar
    }

    try {
      await editUser(user, uid)
      setLoading(false)
      onClose(true)
    } catch (error) {
      console.log(error)
      // TODO set alert
      setLoading(false)
    }
  }

  return (
    <div className='form-container'>
      <PersonalInformation
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        phone={phone}
        setPhone={setPhone}
        bio={bio}
        setBio={setBio}
        skills={skills}
        setSkills={setSkills}
        setAvatar={setAvatar}
      />
      <Button className='button' onClick={e => handleSubmit(e)} variant='contained' color='primary'>
        {loading ? <CircularProgress className='small-spinner' /> : 'Submit'}
      </Button>
    </div>
  )
}

export default EditProfile
