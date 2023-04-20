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
function App() {
  return (
    <>
    <NoteState>
    <Router>  
    <Navbar/>
    <div className='Homecontainer'>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
      </Routes>
    </div>
    <Footer/>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
