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
    id: "0001",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
  },
  {
    id: "0002",
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

  const onProductCountChange = (product: Product, count: number) => {
    console.log('onProductCountChange')
  }

  return (
    <div>
      <h1 style={{marginBottom:25}}>Shopping Store</h1>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {products.map((product) => (

          <ProductCard product={product} className="bg-dark">
            <ProductImage 
              className="custom-img" 
              style={{ boxShadow:' 10px 10px 10px rgba(0,0,0, .2)' }} />
            <ProductTitle className="text-white font-bold" />
            <ProductButtons className="custom-buttons text-white font-bold" />
          </ProductCard>

))}

        
      </div>
      <div className='shopping-cart'>
        <ProductCard product={products[1]}style={{width:'100px'}} className="bg-dark">
          <ProductImage 
            className="custom-img" 
            style={{ boxShadow:' 10px 10px 10px rgba(0,0,0, .2)' }} />
         <ProductButtons className="custom-buttons text-white font-bold" />
        </ProductCard>
      </div>
    </div>
  );
};
