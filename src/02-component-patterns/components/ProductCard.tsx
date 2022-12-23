import { createContext, useContext } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductCardProps, ProductContextProps } from "../interfaces";
import styles from "../styles/styles.module.css";

import { ProductTitle, ProductImage, ProductButtons } from "../components";

export const ProductContext  = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ( { product, children }: ProductCardProps ) => {
  
  const {counter, increaseBy} = useProducts();

  return (
    <Provider value={{counter, increaseBy, product}}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  );
};
