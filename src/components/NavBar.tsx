
import { AddShoppingCart } from '@mui/icons-material';
import { AppBar, IconButton, Link, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';

const NavBar = () => {
    return (
        <>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Link>
                    </Link>
                    <Typography variant="h5" noWrap component="div" color="inherit" sx={{ flexGrow: 1 }}>
                        <Link href="/" underline="hover">Niteki Shop</Link>
                    </Typography>
                    <Tooltip title="Meu carrinho">
                        <IconButton href="/products/cart" color='primary'>
                            <AddShoppingCart />
                        </IconButton>
                    </Tooltip>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;