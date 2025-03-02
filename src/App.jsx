import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/about/About'
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';

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
