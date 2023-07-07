"use client"
import ProductCard from '@/components/ProductCard';
import ProductDetail from '@/components/ProductDetail';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

type coloreTypes = {
  name: string,
  code: string
}
type productTypes = {
  id: string,
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
export default function Home() {
  const [open, setOpen] = useState<boolean>(false)
  const [product, setProduct] = useState<productTypes>()

  const products: productTypes[] = [
    {
      id: uuid(),
      name: "Lenovo - Auricular bluethooth 7th genacao 5.0",
      price: 1500,
      deliver: true,
      colors: [{ name: 'red', code: '#y3' }, { name: 'green', code: '#h7' }],
      image: "/img/lenovo.jpg",
      rate: 4,
      description: "Com a capacidade de bloquear o barulho externo auto atendimento de chamadas e sensor de controle de presença e fala ao escutar a musica",
      status: true,
      quantity: 23
    },
    {
      id: uuid(),
      name: "Samsung Galaxy S20 ",
      price: 18850,
      deliver: false,
      colors: [{ name: 'blue', code: '#3e' }, { name: 'red', code: '#44' }, { name: 'pink', code: '#t4' }],
      image: "/img/s20.avif",
      rate: 4.5,
      description: "Processador. Velocidade de processador. 2.73GHz, 2.5GHz, 2GHz · Visor. Tamanho (Visor Principal). 158.3mm (6.2) · Câmera. Câmera Traseira - Resolução (Múltipla). Tamanho (Visor Principal): 158.3mm (6.2)",
      status: true,
      quantity: 12
    }
  ];
  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Super Produtos
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Produtos incriveis por preços imbatíveis
        </Typography>
      </Container>
      <Container maxWidth="xl" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {products.map((product: productTypes) => (
            <ProductCard key={product.id} product={product} onHandleClick={() => (setOpen(true), setProduct(product))} />
          ))}
        </Grid>
        <ProductDetail open={open} product={product} window='xl' handleClose={() => setOpen(false)} />
      </Container>
    </>
  )
}