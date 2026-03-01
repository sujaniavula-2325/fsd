// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Books from './Books/Books';
import AddBook from './AddBook/AddBook';
import Contact from './Contact/Contact';
import './App.css';
import Login from './Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} />
            <Route path="/AddBook" element={<AddBook />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;