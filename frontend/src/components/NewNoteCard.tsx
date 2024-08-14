import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'

const NewNoteCard = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/add-note')
  }

  return (
    <Card
      sx={{
        minWidth: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '18rem',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <CardContent>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <IconButton color='primary'>
            <AddIcon fontSize='large' sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}

export default NewNoteCard
