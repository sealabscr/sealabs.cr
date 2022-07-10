import React from 'react';
import UnderConstruction from './pages/underConstruction';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme';

const App = () => {
    const theme = getTheme()
    
    return (    
        <ThemeProvider  theme={theme}>
            <UnderConstruction />
        </ThemeProvider >
    );
}

export default App;