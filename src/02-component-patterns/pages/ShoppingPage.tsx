import {
  ProductTitle,
  ProductImage,
  ProductButtons,
  ProductCard,
} from "../components";
import { products } from "../data";
import { useShoppingCart } from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";


export const ShoppingPage = () => {
  
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  
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
