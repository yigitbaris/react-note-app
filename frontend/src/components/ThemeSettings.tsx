import React from 'react'
import { SketchPicker } from 'react-color'
import { useTheme } from '../context/ThemeContext'

const ThemeSettings = () => {
  const {
    theme,
    primaryColor,
    secondaryColor,
    setTheme,
    setPrimaryColor,
    setSecondaryColor,
  } = useTheme()

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value as 'light' | 'dark')
  }

  const handlePrimaryColorChange = (color: any) => {
    setPrimaryColor(color.hex)
  }

  const handleSecondaryColorChange = (color: any) => {
    setSecondaryColor(color.hex)
  }

  return (
    <div>
      <div>
        <label>
          <input
            type='radio'
            value='light'
            checked={theme === 'light'}
            onChange={handleThemeChange}
          />
          Light
        </label>
        <label>
          <input
            type='radio'
            value='dark'
            checked={theme === 'dark'}
            onChange={handleThemeChange}
          />
          Dark
        </label>
      </div>
      <div>
        <h3>Primary Color</h3>
        <SketchPicker
          color={primaryColor}
          onChange={handlePrimaryColorChange}
        />
      </div>
      <div>
        <h3>Secondary Color</h3>
        <SketchPicker
          color={secondaryColor}
          onChange={handleSecondaryColorChange}
        />
      </div>
    </div>
  )
}

export default ThemeSettings
