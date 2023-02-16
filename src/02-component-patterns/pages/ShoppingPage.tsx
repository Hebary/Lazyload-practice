import { useState } from "react";
import {
  ProductTitle,
  ProductImage,
  ProductButtons,
  ProductCard,
} from "../components";
import { Product } from '../interfaces/index';
import "../styles/custom-styles.css";

const products: Product[] = [
  {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
  },
  {
    id: "2",
    title: "Coffee Mug Meme",
    img: "./coffee-mug2.png",
  }
]; 

interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {

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
      const { [product.id]: itemToDelete, ...rest } = prevShoppingCart;  

      return {...rest};
    });
  }
    //   if(count === 0) {

        // console.log({itemToDelete})


    //   return {
    //     ...prevShoppingCart,
    //     [product.id] : { ...product, count }
    // }
  return (
    <div>
      <h1 style={{ marginBottom: 25 }}> Shopping Store </h1>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {products.map((product) => (
          
          <ProductCard 
              key={product.id}
              product={product} 
              className="bg-dark"
              onChange = { onProductCountChange } 
              value={ shoppingCart[product.id]?.count || 0 }
            >
            <ProductImage 
              className="custom-img" 
              style={{ boxShadow:' 10px 10px 10px rgba(0,0,0, .2)' }} />
            <ProductTitle className="text-white font-bold" />
            <ProductButtons className="custom-buttons text-white font-bold" />
          </ProductCard>
          ))
        }
        
      </div>
      <div className='shopping-cart'>
        {
          // Object.values(shoppingCart).map( (product) => (
          Object.entries( shoppingCart ).map( ( [key, product] ) => (
          <ProductCard
            key={key}
            className="bg-dark"
            product={ product }
            style={{ width:'100px' }}
            value = { product.count }
            onChange={ onProductCountChange }
          >
            <ProductImage 
              className="custom-img" 
              style={{ boxShadow:' 10px 10px 10px rgba(0, 0, 0, .2)' }} />
            <ProductButtons className="custom-buttons text-white font-bold" />
          </ProductCard>
          ))
        }
      </div>
    </div>
  );
};
