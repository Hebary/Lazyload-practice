import { useState } from "react";
import { products } from "../data";
import { Product } from '../interfaces';

interface ProductInCart extends Product {
    count: number
}


export const useShoppingCart = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({
        // '1':  { ...products[0], count: 9 },
      });
    
      const onProductCountChange = ({ count, product }: { count:number, product: Product } ) => {
    
        setShoppingCart(( prevShoppingCart ) => {
    
        const productInCart: ProductInCart = prevShoppingCart[product.id] || { ...product, count: 0 };  
          
        if(Math.max( productInCart.count + count, 0) > 0) {
            productInCart.count += count;  
            return {
              ...prevShoppingCart,
              [product.id]: productInCart
            }
          }
          //si count es 0 ó menor a 0 borra el producto
          const { [product.id]: _, ...rest } = prevShoppingCart;  
    
          return {...rest};
        });
      }
        //   if(count === 0) {
            // const { [product.id]: itemToDelete, ...rest } = prevShoppingCart;  
            // console.log({itemToDelete})
    
    
        //   return {
        //     ...prevShoppingCart,
        //     [product.id] : { ...product, count }
        // }
    
    return {
        onProductCountChange,
        shoppingCart
    }
}