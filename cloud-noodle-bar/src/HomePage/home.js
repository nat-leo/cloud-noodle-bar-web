import React, { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, Typography } from '@mui/material';

export default function Home(props) {
  return <ProductCard name="Tonkotsu" price="$7.00"/>
}

function ProductCard(props) {
  return <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography>
          {props.name}
      </Typography>
      <Typography>
          Some words and stuff.
      </Typography> 
      <Typography>
          {props.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small'>Buy Now</Button>
    </CardActions>
  </Card>
}