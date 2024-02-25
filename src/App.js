import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //weather dark mode is enable or note

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    },2000);
  }

  const toggleAmoled = () => {
    if(mode  === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#000000';
      showAlert("Amoled mode has been enabled", "success");
      document.title = 'Textutiles - Amoled mode';
  }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutiles - Light mode';

  }
}

  const toggleMode = () => {
    if(mode  === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#565656';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutiles - Dark mode';
  }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutiles - Light mode';
  }
}

  return (
    <>
    <Router>
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleAmoled={toggleAmoled}/>
      <Alert alert = {alert}/>
      <div className='container my-3'>

      <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>}/>
      </Routes>

      </div>
    </Router>
        
    </>
  );
}

export default App;