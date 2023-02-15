import { createContext, FC, ReactElement, CSSProperties } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductContextProps } from "../interfaces";
import { Product } from '../interfaces/index';
import styles from "../styles/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: () => void;
}
export const ProductCard : FC<Props> = ( { product, children, className, style, onChange }) => {
  
  const { Provider } = ProductContext;
  const {counter, increaseBy} = useProducts(onChange);

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
