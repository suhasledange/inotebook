import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Footer from './components/Footer'
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message)=>{
    setAlert({
      msg:message,
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
    <>
    <NoteState>
    <Router>  
    <Navbar/>
    {/* <Alert alert={alert}/> */}
    <div className='Homecontainer'>
        <Routes>
        <Route path="/" element={ <Home showAlert={showAlert}/> } />
        <Route path="about" element={ <About showAlert={showAlert}/> } />
        <Route path="login" element={ <Login showAlert={showAlert}/> } />
        <Route path="signup" element={ <Signup showAlert={showAlert}/> } />


      </Routes>
    </div>
    <Footer/>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
