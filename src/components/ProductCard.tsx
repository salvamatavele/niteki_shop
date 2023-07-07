"use client"
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Rating, Tooltip, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types'
import { AddShoppingCart, Favorite, Share } from '@mui/icons-material';
type coloreTypes = {
  name: string,
  code: string
}
type productTypes = {
  name: string,
  price: number,
  deliver: boolean,
  colors: coloreTypes[],
  image: string,
  rate: number,
  description: string,
  status: boolean,
  quantity: number
}

const ProductCard = ({ product, onHandleClick }: { product: productTypes, onHandleClick?: (Function: any) => void }) => {

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Card>
          <CardActionArea onClick={onHandleClick}>
            <CardMedia
              component="img"
              width="100"
              // height="180"
              image={product.image}
              alt="image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.price}{`.00 MZN`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.name}
              </Typography>
              <Rating name="read-only" value={product.rate} precision={0.5} readOnly />
              <Typography variant="body2" color="primary">
                {product.deliver ? 'Entrega gratis' : <br />}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <Tooltip title="Favorito">
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
            </Tooltip>
            <Tooltip title="Adicionar ao carrinho">
              <IconButton aria-label="carrinho">
                <AddShoppingCart />
              </IconButton>
            </Tooltip>

            <Tooltip title="partilhar">
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </Tooltip >
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
  hrefDetail: PropTypes.string
}

export default ProductCard
