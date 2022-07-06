import React, { useReducer } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, Container, Typography } from '@mui/material';

import { CartContext } from './App.js';

export default function Products() {
    return <>
      <ProductCard name="Tonkotsu" price="7.99"/>
      <ProductCard name="Chicken Paitan" price="7.99"/>
    </>
}

function ProductCard(props) {
    return <Product name={props.name} price={props.price} />
}

function Product(props) {
  const [ state, dispatch ] = React.useContext(CartContext)

  var handleBuyNow = (e) => {
    dispatch({
      type: "add",
      payload: {
        'name': props.name, 
        'price': props.price
      }
    });
    console.log("Buying", props.name);
    console.log("State:", state.cart);
  }
  
  return <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography>
          {props.name}
      </Typography>
      <Typography>
          In cart: {state.cart[props.name]}
      </Typography> 
      <Typography>
          {props.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small' onClick={handleBuyNow}>Buy Now</Button>
    </CardActions>
  </Card>
}