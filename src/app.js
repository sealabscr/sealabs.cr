import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom"

import Navbar from './components/Navbar'
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
                </Router>
        </ThemeProvider >
    );
}

export default App;