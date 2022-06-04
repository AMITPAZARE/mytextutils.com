import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Sanata from './Component/Sanata';
import About from './Component/About';
import Alert from './Component/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 
 

function App() {
  

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
   
 
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been Enable", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been Enable", "success")
    }
  }
  return (
    <>

    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}  />
      {/* <Sanata heding="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
      <Alert alert={alert} />
      <div>
      <Routes>
      <Route exact path="/About" element={<About mode={mode}/>} />
      <Route exact path="/mytextutils.com" element={<Sanata heding="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />  
      </Routes>
      </div>
    </Router>
    </>
          
           
      
     
     
  );
}

export default App;
