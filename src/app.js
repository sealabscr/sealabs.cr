import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme';

const App = () => {
    const theme = getTheme()
    
    return (    
        <ThemeProvider  theme={theme}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/">
                        </Route>
                    </Routes>
                    <Footer />
                </Router>
        </ThemeProvider >
    );
}

export default App;