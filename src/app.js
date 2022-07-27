import {
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom"

import Footer from './components/Footer'
import Home from './pages/home';
import Services from './pages/services';
import NavbarWrapper from "./components/Navbar";
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme';
import Careers from "./pages/careers";

const App = () => {
    const theme = getTheme()
    
    return (    
        <ThemeProvider  theme={theme}>
                <Router>
                  <NavbarWrapper />
                    <Routes>
                        <Route path="/"  element={<Home />} />
                        <Route path="/services"  element={<Services />} />
                        <Route path="/Careers"  element={<Careers />} />
                    </Routes>
                    <Footer />
                </Router>
        </ThemeProvider >
    );
}

export default App;