import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Badge, Button, createTheme, ListItem, ThemeProvider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Products from './products.js';
import { CartContext } from './App.js';
import ProductDetails from './product_details.js';

const drawerWidth = "25%";
const theme = createTheme({
  Media: {
    maxWidth: '100%',
    objectFit: 'cover',
  },
});

export default function Home() {
  const [ state, dispatch ] = React.useContext(CartContext)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Cloud Noodle Bar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
        <Toolbar />
        <Box display="flex"
             justifyContent="center"
             alignItems="center" 
             sx={{ overflow: 'auto' }}>
          <List>
            {['Products'].map((text, index) => (
              <ListItem>
                <Button>
                  {text}
                </Button>
              </ListItem>
            ))}
            <Badge badgeContent={state.total}>
                <ShoppingCartIcon/>
            </Badge>
          </List>     
        </Box>
      </Drawer>
      <Stack component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Products/>
        </Box>
        <Box component="main" sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: 'primary.dark',
        }}>
         <ProductDetails />
        </Box>
      </Stack>
    </Box>
  );
}
