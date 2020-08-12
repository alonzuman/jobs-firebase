import React from 'react'
import { storage } from '../firebase'

const FileUploader = ({ setImageUrl, setProgress, setIsUploading }) => {
  const handleChange = async e => {
    if (e.target.files[0]) {
      await handleUpload(e.target.files[0])
    }
  }

  const handleUpload = async (file) => {
    setIsUploading(true)
    const uploadTask = storage.ref(`job-images/${file.name}`).put(file)
    uploadTask.on('state_changed',
      snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress)
      },
      error => console.log(error),
      async () => {
        const url = await storage.ref('job-images').child(file.name).getDownloadURL()
        setIsUploading(false)
        setImageUrl(url)
      }
    )
  }

  return <input type='file' onChange={handleChange} />
}

export default FileUploader
