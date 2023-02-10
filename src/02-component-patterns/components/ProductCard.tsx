import { createContext, FC, ReactElement, CSSProperties } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductContextProps } from "../interfaces";
import styles from "../styles/styles.module.css";
import { Product } from '../interfaces/index';


export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard : FC<Props> = ( { product, children, className, style }: Props ) => {
  
  const { Provider } = ProductContext;
  const {counter, increaseBy} = useProducts();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div 
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  );
};
