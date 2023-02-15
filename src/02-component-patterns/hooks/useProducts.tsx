import { useState } from "react";

// interface Props {
//     onChange?: () => void
//     counter: number
//     increaseBy: ( value: number ) => void
// }

export const useProducts = ( onChange?: () => void ) => {
    
    const [counter, setCounter] = useState<number>(0);
    
    const increaseBy = ( value: number ) => {
        setCounter ( prev => Math.max(0, prev + value) )
        onChange && onChange()
    }

    return {
        counter,
        increaseBy
    }
}
