import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import CreateCourse from './CreateCourse/CreateCourse.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MuiThemeProvider>
      <App />
      {/* <CreateCourse/> */}
    </MuiThemeProvider>
  </React.StrictMode>,
)
