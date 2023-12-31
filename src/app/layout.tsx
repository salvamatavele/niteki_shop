"use client"
import NavBar from '@/components/NavBar';
import { CartProvider } from '@/contexts/CartContext';
import { ThemeProvider, createTheme } from '@mui/material';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })


var defaultTheme = createTheme()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><title>Niteki Shop</title></head>
      <body className={inter.className}>
        <CartProvider>
          <ThemeProvider theme={defaultTheme}>
            <NavBar />
            {children}
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  )
}
