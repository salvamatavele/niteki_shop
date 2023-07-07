"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    AppBar,
    Badge,
    Box,
    Breakpoint,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Rating,
    Slide,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Add, AddShoppingCart, Close, Favorite, HorizontalRule, Share } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";

type coloreTypes = {
    name: string;
    code: string;
};
type productTypes = {
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

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDetail = ({
    open,
    handleClose,
    window,
    product,
}: {
    open: boolean;
    handleClose?: (Function: any) => void;
    window: number | Breakpoint;
    product?: productTypes;
}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const [fret, setFret] = useState<number>(50);
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            TransitionComponent={Transition}
        >
            <AppBar color="transparent" sx={{ position: "relative" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DialogContent>
                <Container maxWidth="xl" component="main">
                    <Toolbar />
                    <Grid container spacing={0} alignItems="flex-end">
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ width: "100%" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        width="80"
                                        image={product?.image}
                                        alt="no image"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ width: "100%" }}>
                                <CardContent>
                                    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                                        <nav aria-label="main">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemText
                                                        primary={
                                                            <>
                                                                <Typography fontWeight="bold" variant="h6">
                                                                    {product?.name}
                                                                </Typography>
                                                            </>
                                                        }
                                                    />
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemText
                                                        primary={
                                                            <>
                                                                <Rating
                                                                    name="read-only"
                                                                    value={product?.rate}
                                                                    precision={0.5}
                                                                    readOnly
                                                                />{" "}
                                                                <Typography variant="caption">
                                                                    23 avaliações
                                                                </Typography>
                                                            </>
                                                        }
                                                    />
                                                </ListItem>
                                            </List>
                                        </nav>
                                        <Divider />
                                        <nav aria-label="description">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemText
                                                        primary={
                                                            <>
                                                                <Typography fontWeight="bold" variant="h4">
                                                                    {product?.price}.00 MZN
                                                                </Typography>
                                                            </>
                                                        }
                                                    />
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemText
                                                        primary="Descrição"
                                                        secondary={product?.description}
                                                    />
                                                </ListItem>
                                            </List>
                                        </nav>
                                        <Divider />
                                        <nav aria-label="optional">
                                            <List>
                                                {product?.colors && (
                                                    <ListItem disablePadding>
                                                        <ListItemText primary="Cores:" />
                                                    </ListItem>
                                                )}
                                                <ListItem disablePadding>
                                                    <Grid
                                                        container
                                                        spacing={1}
                                                        sx={{ display: "flex", justifyContent: "start" }}
                                                    >
                                                        {product?.colors.map((color: coloreTypes) => (
                                                            <Grid key={color.code} item>
                                                                <Box
                                                                    sx={{
                                                                        width: 30,
                                                                        height: 30,
                                                                        backgroundColor: color.name,
                                                                    }}
                                                                />
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ width: "100%" }}>
                                <CardContent>
                                    <nav aria-label="main">
                                        <List>
                                            <ListItem disablePadding>
                                                <ListItemText
                                                    primary={
                                                        <>
                                                            {product?.deliver ? (
                                                                <Typography fontWeight="bold" variant="h6">
                                                                    Etrega gratis
                                                                </Typography>
                                                            ) : (
                                                                <Typography fontWeight="bold" variant="h6">
                                                                    {`Entrega: ${fret * quantity / 2}.00 MZN`}
                                                                </Typography>
                                                            )}
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
                                                    primary="Garantias"
                                                    secondary="Proteção ao Consumidor de 24 dias "
                                                />
                                            </ListItem>
                                        </List>
                                    </nav>
                                    <Divider />
                                    <nav aria-label="description">
                                        <List>
                                            <ListItem disablePadding>
                                                <ListItemText
                                                    primary={
                                                        <Typography fontWeight="bold" variant="h6">
                                                            Quantidade
                                                        </Typography>

                                                    }
                                                />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Grid
                                                    container
                                                    spacing={1}
                                                    sx={{ display: "flex", justifyContent: "start" }}
                                                >
                                                    <Grid item>
                                                        <IconButton onClick={() => setQuantity(quantity - 1)} disabled={quantity == 1}><HorizontalRule /></IconButton>
                                                    </Grid>
                                                    <Grid item>
                                                        <TextField variant="outlined" value={quantity} size="small" disabled sx={{ maxWidth: "80px" }} />
                                                    </Grid>
                                                    <Grid item>
                                                        <IconButton onClick={() => setQuantity(quantity + 1)} disabled={quantity >= product?.quantity}><Add /></IconButton>
                                                    </Grid>
                                                </Grid>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Grid
                                                    container
                                                    mt={4}
                                                    spacing={1}
                                                    sx={{ display: "flex", justifyContent: "center" }}
                                                >
                                                    <Grid item>
                                                        <Button variant="contained" color="error" endIcon={<AddShoppingCart />}>
                                                            Adicionar ao carrinho
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Grid
                                                    container
                                                    mt={4}
                                                    spacing={1}
                                                    sx={{ display: "flex", justifyContent: "space-between" }}
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
                                                                <Share />
                                                            </IconButton>
                                                        </Tooltip >
                                                    </Grid>
                                                </Grid>
                                            </ListItem>
                                        </List>
                                    </nav>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </DialogContent>
        </Dialog>
    );
};
ProductDetail.propTypes = {
    handleClose: PropTypes.func,
    window: PropTypes.string,
    open: PropTypes.bool,
};
export default ProductDetail;
