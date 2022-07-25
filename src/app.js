import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme';

const App = () => {
    const theme = getTheme()
    
    return (    
        <ThemeProvider  theme={theme}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/"  element={<Home />} />
                    </Routes>
                    <Footer />
                </Router>
        </ThemeProvider >
    );
}

export default App;