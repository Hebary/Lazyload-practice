import { useEffect, useState } from "react";
import { Product, onChangeArgs } from "../interfaces";

interface useProductsArgs {
    product: Product
    onChange? : (args: onChangeArgs) => void
    value?: number
}

export const useProducts = ( { onChange, product, value = 0 }: useProductsArgs ) => {
    
    const [counter, setCounter] = useState(value);
    
    const increaseBy = ( value: number ) => {
       
        const newValue =  Math.max( counter + value, 0 );
        setCounter( newValue );
    
        onChange && onChange({ count: newValue, product })
    }
    
    useEffect(() => {
        setCounter( value );
    }, [value])
    
    return {
        counter,
        increaseBy,
        value,
    }
}
