import { createContext, FC } from "react";
import { useProducts } from "../hooks/useProducts";
import { Product, onChangeArgs, ProductContextProps, InitialValues } from "../interfaces";
import styles from "../styles/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  // children?: React.ReactElement | React.ReactElement[];
  children: () => JSX.Element
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number
  initialValues?: InitialValues;
}

export const ProductCard: FC<Props> = ({ product, children, className, style, onChange, value, initialValues }) => {
  
  const { Provider } = ProductContext;
  const { count, increaseBy, maxCount } = useProducts({ onChange, product, value, initialValues });

  return (
    <Provider 
      value={{ 
        count, 
        increaseBy, 
        product,
        maxCount 
      }}>
      <div 
        className={`${styles.productCard} ${className}`}
        style = { style }
      >
        { children() } 
      </div>
    </Provider>
  );
};
