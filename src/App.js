import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/pages/homepgae';
import AboutUs from './components/pages/aboutUs';
import ContactUs from './components/pages/contactUs';
import Birds from './components/pages/birds';
import './App.css';
import Cats from './components/pages/cats';
import Dogs from './components/pages/dogs';
import Footer from './components/Footer';

const App = () => {
    
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/birds" element={<Birds />} />
                <Route path="/cats" element={<Cats />} />
                <Route path="/dogs" element={<Dogs />} />

            </Routes>
            <Footer/>

        </Router>

    );
};

export default App;
