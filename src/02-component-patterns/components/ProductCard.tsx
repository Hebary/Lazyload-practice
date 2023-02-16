import { createContext } from "react";
import { useProducts } from "../hooks/useProducts";
import { Product, onChangeArgs, ProductContextProps } from "../interfaces";
import styles from "../styles/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number
}
export const ProductCard : React.FC<Props> = ({ product, children, className, style, onChange, value }) => {
  
  const { Provider } = ProductContext;
  const { counter, increaseBy } = useProducts({ onChange, product, value });

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
