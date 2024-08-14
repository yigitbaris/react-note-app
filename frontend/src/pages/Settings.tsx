import { TextField, Button, Typography, Box } from '@mui/material'

const Settings = () => {
  return (
    <Box
      className='flex justify-between  bg-slate-500 p-8 '
      sx={{
        width: '100% ',
        height: '80vh',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
      }}
    >
      <Box
        sx={{ width: '100%', maxWidth: 400 }}
        className='bg-white p-8 rounded-lg shadow-md h-96'
      >
        <Typography variant='h4' className='text-center text-black '>
          User Profile
        </Typography>

        <Box className='flex flex-col space-y-6 my-5 '>
          {/* User Name Input */}
          <TextField
            label='User Name'
            variant='outlined'
            fullWidth
            className='bg-gray-100'
          />

          {/* Surname Input */}
          <TextField
            label='Surname'
            variant='outlined'
            fullWidth
            className='bg-gray-100'
          />

          {/* Save Button */}
          <Button
            variant='contained'
            color='primary'
            fullWidth
            className='py-3 '
          >
            Save
          </Button>
        </Box>
      </Box>

      <Box
        sx={{ width: '100%', maxWidth: 400, marginLeft: 20 }}
        className='bg-white p-8 rounded-lg shadow-md h-96'
      >
        <Typography variant='h4' className='text-center text-black '>
          Theme Setting
        </Typography>

        <Box className='flex flex-col space-y-6 my-5 '>
          {/* Save Button */}
          <Button
            variant='contained'
            color='primary'
            fullWidth
            className='py-3 '
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Settings
