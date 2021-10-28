import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
import Form1 from './Mycomponents/Form1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import form from './form'
function App() {
  const [mode, setmode] = useState('light')
   const togglemode=()=>{
    if(mode==='dark'){
     setmode('light')
     document.body.style.backgroundColor="white";
    //  document.body.style.color="black";
     
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor="black";
      // document.body.style.color="white";
    }
  }
  
  return (
    
    <>
    <Router>
      <Header title="Consultation" dropdown ="Login" mode={mode} togglemode={togglemode}/>
      <Todos />
      <Footer/>
          <Switch>
              <Route exact path="/Form">
                <Form1/>
              </Route>
              {/* <Route path="/">
                <Header title="Consultation" dropdown ="Login" mode={mode} togglemode={togglemode}/>
              </Route>
              <Route path="#">
              <Footer/>
              </Route> */}
            </Switch>
      {/* <Form1/> */}
       </Router>
    </>
  );
}

export default App;
