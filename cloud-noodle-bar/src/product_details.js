import React, { useState } from "react";
import ButtonBase from '@mui/material/ButtonBase';
import { Button, Grid, Stack } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function ProductDetails() {
  return <>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ProductImageStack/>
      </Grid>
      <Grid item xs={6}>
        <ProductTextDetailStack/>
      </Grid>
    </Grid>
  </>
}

function ProductImageStack() {
  return <>
    <Stack>
      <ProductImages />
    </Stack>
  </>
}

function ProductTextDetailStack() {
  return <>
    <Stack spacing={2}>
      <Paper>
        <Typography>
          Chicken Paitan
        </Typography>
      </Paper> 
      <Paper>
        <Typography>
        This is a fairly long product description filled with useful information
        to help customers make a decision about the product that they're looking
        at. This is a short sentence. This is a slightly longer sentence. 
        </Typography>
      </Paper> 
      <Paper>
        <ProductConfiguration/>
      </Paper>
      <Paper>
        <Button>
          Add to Cart
        </Button>
      </Paper>
    </Stack>
  </>
}

function ProductConfiguration() {
  return <>
    <Typography>
      None right now, sorry.
    </Typography>
  </>
}

function ProductImages() {
  const [imgUrl, setImgUrl] = useState("./logo192.png");
  return <>
    <Stack>
      <Stack justifyContent={"center"}>
        <img src={imgUrl}/>
      </Stack>
      <Stack direction="row" justifyContent={"center"}>
          <ButtonBase onClick={()=>{setImgUrl("./logo192.png")}}>
            <img src="./logo192.png" width={50}/>
          </ButtonBase>
          <ButtonBase onClick={()=>{setImgUrl("./logo512.png")}}>
            <img src="./logo192.png" width={50}/>
          </ButtonBase> 
          <ButtonBase onClick={()=>{setImgUrl("./favicon.ico")}}>
            <img src="./logo192.png" width={50}/>
          </ButtonBase> 
      </Stack>
    </Stack>
  </>
}