"use client"
import ShoppingCart from '@/components/ShoppingCart';
import { Box, Container } from '@mui/material';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';

type coloreTypes = {
  name: string;
  code: string;
};
type productTypes = {
  id: string;
  name: string;
  price: number;
  deliver: boolean;
  colors: coloreTypes[];
  image: string | "next.svg";
  rate: number;
  description: string;
  status: boolean;
  quantity: number;
};

type productContextTypes = {
  total: number,
  product: productTypes
}

const Cart: React.FC = () => {
  const cookies = parseCookies();
  const [products, setProducts] = useState<[productContextTypes]>()

  useEffect(() => {
    let productsValues: Array<productContextTypes> = [];
    for (const key in cookies) {
      if (Object.prototype.hasOwnProperty.call(cookies, key)) {
        const element = cookies[key];
        //  setProducts(current =>[...current, JSON.parse(element)]);
        productsValues.push(JSON.parse(element));
      }
    }
    setProducts(productsValues)
  }, [cookies])


  return (
    <>
      <Container maxWidth="xl" component="main">
          <ShoppingCart products={products}/>
      </Container>

    </>
  );
}

export default Cart;