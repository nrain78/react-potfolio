import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/about/about'
import Home from './components/home/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer';

function App() {

  return (
<>

      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>} />

        {/* Add more routes as needed */}
      </Routes>
    
      <Footer />
    </Router>
  
    </>
  
  )
}

export default App
