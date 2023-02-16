import { createContext, FC, ReactElement, CSSProperties } from "react";
import { useProducts } from "../hooks/useProducts";
import { Product, onChangeArgs, ProductContextProps } from "../interfaces";
import styles from "../styles/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
}
export const ProductCard : FC<Props> = ( { product, children, className, style, onChange }) => {
  
  const { Provider } = ProductContext;
  const { counter, increaseBy } = useProducts({ onChange, product });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div 
        className={`${styles.productCard} ${className}`}
        style = { style }
      >
        {children}
      </div>
    </Provider>
  );
};
