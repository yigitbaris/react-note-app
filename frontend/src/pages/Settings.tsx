import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '../context/ThemeContext'

const Settings = () => {
  const { theme, setTheme } = useTheme()

  const handleChange = (event: SelectChangeEvent<'light' | 'dark'>) => {
    const newTheme = event.target.value as 'light' | 'dark' // Type assertion
    setTheme(newTheme)
  }

  return (
    <FormControl fullWidth>
      <InputLabel>Theme</InputLabel>
      <Select value={theme} onChange={handleChange} label='Theme'>
        <MenuItem value='light'>Light</MenuItem>
        <MenuItem value='dark'>Dark</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Settings
