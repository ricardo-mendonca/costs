import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


//import Container from './components/pages/layout/Container'

function App() {
  return (
    <Router>

      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
      
    </Router>
  );
}

export default App;
