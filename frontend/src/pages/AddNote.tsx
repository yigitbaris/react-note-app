import React, { useState } from 'react'
import { TextField, Button, Typography, Box } from '@mui/material'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const navigate = useNavigate()
  const [note, setNote] = useState({ title: '', content: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }))
  }

  const handleSave = async () => {
    try {
      await axios.get('/note/not-denemelik')
      toast.success('Login successful')
      // navigate('/home')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.msg || 'Login failed')
      } else {
        console.error(error)
        toast.error('An unexpected error occurred')
      }
    }
  }

  return (
    <Box
      className='flex justify-center bg-slate-500 p-8'
      sx={{ width: '100%', height: '93vh' }}
    >
      <Box
        sx={{ width: '70%' }}
        className='bg-white p-8 rounded-lg shadow-md h-96 mt-10'
      >
        <Typography variant='h4' className='text-center text-black'>
          Add Note
        </Typography>

        <Box className='flex flex-col space-y-6 my-5'>
          {/* Title Input */}
          <TextField
            label='Title'
            name='title'
            variant='outlined'
            fullWidth
            className='bg-gray-100'
            value={note.title}
            onChange={handleInputChange}
          />

          {/* Content Input */}
          <TextField
            label='Content'
            name='content'
            variant='outlined'
            fullWidth
            className='bg-gray-100'
            value={note.content}
            onChange={handleInputChange}
          />

          {/* Save Button */}
          <Button
            variant='contained'
            color='primary'
            fullWidth
            className='py-3'
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Settings
