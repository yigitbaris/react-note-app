import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface ThemeContextType {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const themeValue = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: theme === 'light' ? '#1976d2' : '#90caf9',
      },
      secondary: {
        main: theme === 'light' ? '#dc004e' : '#f48fb1',
      },
      background: {
        default: theme === 'light' ? '#ffffff' : '#303030',
        paper: theme === 'light' ? '#f5f5f5' : '#424242',
      },
    },
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeValue}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }
  return context
}

export default ThemeContextProvider
