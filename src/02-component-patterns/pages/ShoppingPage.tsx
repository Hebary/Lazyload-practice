import {
  ProductTitle,
  ProductImage,
  ProductButtons,
  ProductCard,
} from "../components";
import "../styles/custom-styles.css";
const product = {
  id: "0001",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shoppoing Page</h1>
      <hr />

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-img" />
          <ProductCard.Title
            title={"Coffee Mugg Again"}
            className="text-white font-bold"
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} className="bg-dark">
          <ProductImage 
            className="custom-img" 
            style={{ boxShadow:' 10px 10px 10px rgba(0,0,0, .2)' }} />
          <ProductTitle className="text-white font-bold" />
          <ProductButtons className="custom-buttons text-white font-bold" />
        </ProductCard>

        <ProductCard 
          product={product}
          className='text-white font-bold'
          style={{ backgroundColor: 'black' }}
          >
          <ProductImage 
            className='custom-img' 
            style={{ boxShadow:' 0px 2px 5px rgba(255,255,255, .2)' }} />
          <ProductTitle 
            style={{borderBottom:'1px solid white', paddingBottom:'3px'}}/>
          <ProductButtons 
            className='custom-buttons' 
            style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};
