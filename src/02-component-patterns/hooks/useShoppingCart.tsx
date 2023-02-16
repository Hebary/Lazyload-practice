import { useState } from "react";
import { Product } from '../interfaces';

interface ProductInCart extends Product {
    count: number
}


export const useShoppingCart = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({
        // 'i':  { ...product, count: n },
      });
    
      const onProductCountChange = ({ count, product }: { count:number, product: Product } ) => {
    
        setShoppingCart(( prevShoppingCart ) => {
       
          if(count === 0) {
            const { [product.id]: _, ...rest } = prevShoppingCart;  
            return {...rest};
          }
    
          return {
            ...prevShoppingCart,
            [product.id] : { ...product, count }
        }

      });
    }

    return {
      onProductCountChange,
      shoppingCart
    }

  };
