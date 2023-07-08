"use client"
import ProductCard from '@/components/ProductCard';
import ProductDetail from '@/components/ProductDetail';
import { CartContext } from '@/contexts/CartContext';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { useContext, useState } from 'react';
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
  const [productData, setProduct] = useState<productTypes>()
  const {setDataToCart} = useContext(CartContext)


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
    },
    {
      id: uuid(),
      name: "HP 15 Thin & Light Laptop ",
      price: 28950,
      deliver: false,
      colors: [{ name: 'gold', code: '#3e' }, { name: 'gray', code: '#44' }, { name: 'black', code: '#t4' }],
      image: "/img/lep.jpg",
      rate: 4.7,
      description: "HP 15s, 11th Gen Intel Core i3, 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual ",
      status: true,
      quantity: 9
    },
    {
      id: uuid(),
      name: "TP-Link TL-WA850RE Single_Band 300Mbps RJ45 Wireless Range Extender ",
      price: 7550,
      deliver: false,
      colors: [{ name: 'white', code: '#3e' }, { name: 'blue', code: '#44' }, { name: 'black', code: '#t4' }],
      image: "/img/router.jpg",
      rate: 3.7,
      description: "TP-LINK TL-WA850RE is designed to conveniently extend the coverage and improve the signal strength of an existing wireless network to eliminate dead",
      status: false,
      quantity: 9
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
            <ProductCard key={product.id} product={product} onHandleClick={() => (setOpen(true), setProduct(product))} onAddClick={()=>( setDataToCart(1,product))} />
          ))}
        </Grid>
        <ProductDetail open={open} product={productData} window='xl' handleClose={() => setOpen(false)} />
      </Container>
    </>
  )
}