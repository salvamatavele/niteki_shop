"use client"
import { Add, Delete, Favorite, HorizontalRule, Share } from '@mui/icons-material';
import { Avatar, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
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

const ShoppingCart = ({ products }: { products?: productContextTypes[] }) => {
    const [fret, setFret] = useState<number>(50);
    const [totalFret, setTotalFret] = useState<number>(0);
    const [subtotal, setSubtotal] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);



    useEffect(() => {
        let subtotalTemp = 0;
        let deliver = 1;
        if (products) {
            setTotalItems(products.length);
            products.forEach(product => {
                subtotalTemp = subtotalTemp + (product.total * product.product.price);
                if (product.product.deliver) {
                    deliver = deliver + product.total
                }
            });
            setSubtotal(subtotalTemp)
            setTotalFret(deliver)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products?.length])

    return (
        <>
            <Toolbar />
            {products ? (
                <Grid container spacing={0} alignItems="flex-end">
                    <Grid item xs={12} sm={7} md={8}>
                        <Typography variant='h5' ml={2} fontWeight='bold'>Carrinho de compras{`(${totalItems})`}</Typography>
                        <Divider />
                        {products?.map((product: productContextTypes) => (
                            <List key={product?.product.id} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <ListItem alignItems="flex-start"
                                    secondaryAction={
                                        <>
                                            <Grid
                                                sx={{ display: "flex", justifyContent: "end" }}
                                            >
                                                <Grid item>
                                                    <Tooltip title="Favorito">
                                                        <IconButton aria-label="add to favorites">
                                                            <Favorite />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Grid>
                                                <Grid item>
                                                    <Tooltip title="partilhar">
                                                        <IconButton aria-label="share">
                                                            <Delete />
                                                        </IconButton>
                                                    </Tooltip >
                                                </Grid>
                                            </Grid>
                                            <Grid
                                                container
                                                spacing={1}
                                                sx={{ display: "flex", justifyContent: "start" }}
                                            >
                                                <Grid item>
                                                    <IconButton onClick={() => setQuantity(quantity - 1)} disabled={quantity == 1}><HorizontalRule /></IconButton>
                                                </Grid>
                                                <Grid item>
                                                    <TextField variant="outlined" value={product.total} size="small" disabled sx={{ maxWidth: "60px" }} />
                                                </Grid>
                                                <Grid item>
                                                    <IconButton onClick={() => setQuantity(quantity + 1)} disabled={quantity >= product?.product.quantity}><Add /></IconButton>
                                                </Grid>
                                            </Grid>
                                        </>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar alt="no image" src={product.product.image} sx={{ width: 130, height: 130 }} variant='square' />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <>
                                                <Typography fontWeight="bold" variant="subtitle1">
                                                    {product?.product.name}
                                                </Typography>
                                            </>
                                        }
                                        secondary={
                                            <>
                                                <Typography fontWeight="bold" component='span' fontSize={15} variant="subtitle1">
                                                    {product?.product.price}.00 MZN
                                                </Typography>

                                                <br />
                                                {product.product.deliver ? (
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Entrega gratis
                                                    </Typography>
                                                ) : (
                                                    <Typography
                                                        component="span"
                                                        variant="caption"
                                                        color="primary"
                                                    >
                                                        {`Entrega: ${fret * quantity / 3}.00 MZN`}
                                                    </Typography>
                                                )}

                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </List>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                        <Card sx={{ width: "100%" }}>
                            <CardContent>
                                <nav aria-label="main">
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary={
                                                    <>
                                                        <Typography fontWeight="bold" variant="h6">
                                                            Total
                                                        </Typography>
                                                    </>
                                                }
                                            />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary={
                                                    <>
                                                        <Typography fontWeight="bold" variant="subtitle1">
                                                            {`Subtotal:  ${subtotal}.00 MZN`}
                                                        </Typography>
                                                        <Typography fontWeight="bold" variant="subtitle1">
                                                            {`Total de entrega:  ${(totalFret * fret)/2}.00 MZN`}
                                                        </Typography>
                                                        <Typography fontWeight="bold" variant="subtitle1">
                                                            {`Total:  ${((totalFret * fret)/2)+subtotal}.00 MZN`}
                                                        </Typography>
                                                    </>
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </nav>
                                <nav aria-label="description">
                                    <List>
                                        <ListItem disablePadding>
                                            <Button fullWidth variant="contained" sx={{ textTransform: 'capitalize' }} color="error">
                                                {`Continuar(${totalItems})`}
                                            </Button>
                                        </ListItem>
                                    </List>
                                </nav>
                            </CardContent>
                        </Card>
                        <Card sx={{ width: "100%" }}>
                            <CardContent>
                                <nav aria-label="main">
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary={
                                                    <>
                                                        <Typography fontWeight="bold" variant="h6">
                                                            Metodos de Pagamento
                                                        </Typography>

                                                        <Typography fontWeight="bold" variant="h6">

                                                        </Typography>

                                                    </>
                                                }
                                            />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="Estimativa de entrega: 24 horas"
                                            />
                                        </ListItem>
                                    </List>
                                </nav>
                                <Divider />
                                <nav aria-label="description">
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemText
                                                primary="Proteção ao Consumidor"
                                                secondary="Recupere o seu reembolso se o artigo não for entregue ou de acordo com a descrição. "
                                            />
                                        </ListItem>
                                    </List>
                                </nav>
                                <Divider />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ) :
                <>
                    <Typography variant='h5' ml={2} fontWeight='bold'>Carrinho de compras{`(0)`}</Typography>
                    <Divider />
                    <Typography>Nenhum produto adicionado ao seu carrinho</Typography>
                </>
            }
        </>
    )
}

export default ShoppingCart;