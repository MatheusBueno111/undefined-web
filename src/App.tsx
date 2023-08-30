import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import GlobalStyle from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import { ToastContainer } from 'react-toastify'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer autoClose={1500} />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
