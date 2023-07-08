import { setCookie } from "nookies";
import { createContext } from "react";

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

type cartProviderTypes = {
    setDataToCart: (quantity: number, product: productTypes) => Promise<void>;
};

export const CartContext = createContext({} as cartProviderTypes);

export function CartProvider({ children }) {
    function setDataToCart({
        quantity,
        product,
    }: {
        quantity: number;
        product: productTypes;
    }) {
        setCookie(
            null,
            product.id,
            JSON.stringify({ quantity: quantity, product: product }),
            {
                maxAge: 60 * 60 * 24,
            }
        );
    }
    return (
        <CartContext.Provider value={{ setDataToCart }}>
            {children}
        </CartContext.Provider>
    );
}
