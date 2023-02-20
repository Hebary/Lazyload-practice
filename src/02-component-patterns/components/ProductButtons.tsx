import { FC, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons: FC<Props> = ({ className, style }: Props) => {
    
    const { count, increaseBy, maxCount } = useContext(ProductContext);
    
    const isMaxReaced = useCallback(
      () => !!maxCount && count === maxCount,
      [count, maxCount]
    )
    

        return (
          <div 
            className={ `${ styles.buttonsContainer } ${className} ` }
            style={ style }
          >
            <button 
              onClick={() => increaseBy(-1)} className={ styles.buttonMinus }>-</button>
            <div className={ styles.countLabel }>
              { count }
            </div>
            <button onClick={() => increaseBy(1)} className={ `${styles.buttonAdd} ${isMaxReaced() && styles.disabled}` }>+</button>
        </div>
    );
  };