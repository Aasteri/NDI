// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './App.css';
import './Header.css';
import Navbar from "./components/inc/Navbar";
import Navbarbefore from "./components/inc/Navbarbefore";
import NavbarAfter from "./components/inc/Navbar_after";
import Home from "./components/pages/Home";
import Contactus from "./components/pages/Contact";
import Aboutus from "./components/pages/About";
import Infographs from "./components/pages/Infograph";
import StoryPage from "./components/pages/inc/Storypage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/inc/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbarbefore/>
        <Navbar /> 
        <NavbarAfter/>

        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="/Infographs" element={<Infographs />}></Route>
          <Route path="/story" element={<StoryPage />}></Route>


        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
