import './App.css';
import React, {useState} from 'react';
import About from './components/About';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [title, setTitle] = useState('TextUtils - LightMode');
  const [alert, setAlert] = useState();
  document.title = title;
    let toogleMode=()=> {
        if(mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#1a2f4e';
            setTitle('TextUtils - DarkMode')
            showAlert("Enabled dark mode", "success");
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            setTitle('TextUtils - LightMode')
            showAlert("Enabled light mode", "success");
        }
    }
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null)
      }, 1500)
    }
  return (
    <>
        <Router>
          <Navbar mode={mode} toogleMode={toogleMode}/>
          <Alert alert={alert}/>
          <div className='container my-3'>
            <Switch>
              <Route exact path="/">
                <Body showAlert={showAlert} mode={mode}/>
              </Route>
              <Route path="/about">
                <About mode={mode}/>
              </Route>
            </Switch>
          </div>
        </Router>
    </>
  );
}

export default App;
