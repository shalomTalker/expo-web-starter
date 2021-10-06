import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './context/StyleContext';
import Navigator from "./navigation";
import React from 'react'

const App = () => {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <Navigator />

      </ThemeProvider>
    </AppearanceProvider>
  )
}

export default App

