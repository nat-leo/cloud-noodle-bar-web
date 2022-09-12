import React from 'react';
import { AppBar, Card, CardActionArea, CardContent, CardMedia, Grid, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Link as RouterLink } from 'react-router-dom';

import logo from './assets/logo.png';
import { getProducts } from './assets/data';
import './App.css';

const theme = createTheme({
  palette: {
    background: {
      default: "#F8F8F8"
    }
  },
  typography: {
    button: {
      textTransform: 'none',
    }
  },
});

function App() {
  // initialize the list of products
  let products = getProducts();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Header with Menu */}
      <AppBar sx={{bgcolor: "#FFFFFF", boxShadow: 0}}>
        <Toolbar>
          <img src={logo} height="38"/>
          <Link component={RouterLink} to="/shop" underline="hover" sx={{ml: 1, color: '#393945', fontFamily: 'Poppins SemiBold' , fontSize: '2.148rem'}}>
            CLOUD NOODLE BAR
          </Link>
          <Box sx={{mx: "auto"}}>
            <Link component={RouterLink} to="/shop" underline="hover" sx={{mx: 2, color: '#393945', fontFamily: 'Poppins SemiBold' , fontSize: '1.25rem'}}>Shop</Link>
            <Link component={RouterLink} to="/shop" underline="hover" sx={{mx: 2, color: '#393945', fontFamily: 'Poppins SemiBold' , fontSize: '1.25rem'}}>About</Link>
            <Link component={RouterLink} to="/shop" underline="hover" sx={{mx: 2, color: '#393945', fontFamily: 'Poppins SemiBold' , fontSize: '1.25rem'}}>Contact Us</Link>
            <Link component={RouterLink} to="/shop" underline="hover" sx={{mx: 2, color: '#393945', fontFamily: 'Poppins SemiBold' , fontSize: '1.25rem'}}>Blog</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* Body */}
      {/* Breadcrumbs */}
      <Box sx={{ m: 4 }}>
        <Box sx={{mb: 2}}>
          <Typography sx={{color: '#393945', opacity: .8,fontFamily: 'Poppins SemiBold' , fontSize: '0.938rem'}}>CLOUD NOODLE BAR / Shop</Typography>
        </Box>
        {/* Page Title */}
        <Box sx={{mb: 2}}>
          <Typography sx={{color: '#393945', opacity: 1,fontFamily: 'Poppins SemiBold' , fontSize: '1.25rem'}}>Products</Typography>
        </Box>
        {/** BEGIN PRODUCT LIST */}
        <Grid container spacing={2} columns={3}>
          {products.map((product) => (
            <Grid item xs={1}>
              <Card sx={{minWidth: 300, minHeight: 300, boxShadow: 0}}>
                <CardActionArea>
                  <CardMedia component="img"
                             height={130}
                             src={product.image}
                             alt={product.name}/>
                  <CardContent sx={{height: 170}}>
                    <Typography>{product.name}</Typography>
                    <Typography>{product.price}</Typography>
                    <Typography>{product.opener}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          {/** END PRODUCT LIST */}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
