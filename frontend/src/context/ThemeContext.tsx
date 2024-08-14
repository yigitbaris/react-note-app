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
  primaryColor: string
  secondaryColor: string
  setPrimaryColor: (color: string) => void
  setSecondaryColor: (color: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [primaryColor, setPrimaryColor] = useState<string>('#1c2023')
  const [secondaryColor, setSecondaryColor] = useState<string>('#dc004e')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
    }

    const savedPrimaryColor = localStorage.getItem('primaryColor')
    if (savedPrimaryColor) {
      setPrimaryColor(savedPrimaryColor)
    }

    const savedSecondaryColor = localStorage.getItem('secondaryColor')
    if (savedSecondaryColor) {
      setSecondaryColor(savedSecondaryColor)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    localStorage.setItem('primaryColor', primaryColor)
    localStorage.setItem('secondaryColor', secondaryColor)
  }, [theme, primaryColor, secondaryColor])

  const themeValue = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      background: {
        default: theme === 'light' ? '#ffffff' : '#303030',
        paper: theme === 'light' ? '#f5f5f5' : '#424242',
      },
    },
  })

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        primaryColor,
        secondaryColor,
        setPrimaryColor,
        setSecondaryColor,
      }}
    >
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
