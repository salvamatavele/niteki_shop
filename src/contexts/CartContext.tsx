"use client"
import Flash from "@/components/Flash";
import { setCookie } from "nookies";
import { createContext, useState } from "react";

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
    product: {total: number, product: productTypes}
}

type cartProviderTypes = {
    setDataToCart: (product: productContextTypes) => Promise<void>;
};

export const CartContext = createContext({} as cartProviderTypes);

export function CartProvider({ children }) {
    const [success, setSuccess] = useState<string>()
    function setDataToCart({
        product
    }: {
        product: productContextTypes
    }) {
        
        console.log(product);

        setCookie(
            null,
            product.product.id,
            JSON.stringify(product),
            {
                maxAge: 60 * 60 * 24,
            }
        );
        setSuccess('Produto adicionado com sucesso.')
    }
    return (
        <CartContext.Provider value={{ setDataToCart }}>
            {children}
            <Flash success={success}/>
        </CartContext.Provider>
    );
}
