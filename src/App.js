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
function App() {
  return (
    <>
    <NoteState>
    <Router>  
    <Navbar/>
    {/* <Alert message="Welcome To iNoteBook"/> */}
    <div className='Homecontainer'>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="signup" element={ <Signup/> } />


      </Routes>
    </div>
    <Footer/>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
