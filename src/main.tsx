import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>{/* theme is defined in theme.ts for all components */}
    <CssBaseline /> {/* css global reset */}
    <App />
    </ThemeProvider> 
  </StrictMode>,
)
