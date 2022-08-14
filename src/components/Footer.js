import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="relative" sx={{ backgroundColor: "#eaeaea", color: "#5048E5", alignItems: "center", bottom: 0 }}>
      <Toolbar>
        <Box flexDirection="column" justifyContent="center">
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://google.com/">
            Next MUI
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;