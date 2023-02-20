import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from "../interfaces";

interface useProductsArgs {
    product: Product
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export const useProducts = ({ onChange, product, value = 0, initialValues }: useProductsArgs ) => {
    
    const [count, setCount] = useState<number>( initialValues?.count || value );

    const isMounted = useRef(false);

    const increaseBy = ( value: number ) => {
       
        let newValue =  Math.max( count + value, 0 );
        
        if(initialValues?.maxCount) {
            newValue = Math.min(initialValues?.maxCount, newValue);
        }

        setCount( newValue );
    
        onChange && onChange({ count: newValue, product })
    }
    
    
    useEffect(() => {
        if ( !isMounted.current ) return;
            setCount( value );
    }, [value]);
    
    useEffect(() => {
      isMounted.current = false;
    }, [])

    const reset = () => {
        setCount(initialValues?.count || value);
    }
    

    return {
        count,
        isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === count,
        maxCount: initialValues?.maxCount,
        value,
        
        increaseBy,
        reset
    }
}
