import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
)
