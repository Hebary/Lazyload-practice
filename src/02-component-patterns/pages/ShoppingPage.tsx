import { ProductTitle, ProductImage, ProductButtons, ProductCard } from "../components";

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
          <ProductCard product={product}>
              <ProductCard.Image />
              <ProductCard.Title title = { 'Coffee Mugg Again' }/>
              <ProductCard.Buttons />
          </ProductCard>
          <ProductCard product={product}>
              <ProductImage />
              <ProductTitle/>
              <ProductButtons />
          </ProductCard>
        </div>
      </div>
  );
};
