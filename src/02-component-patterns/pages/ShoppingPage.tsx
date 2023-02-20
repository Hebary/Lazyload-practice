import {
  ProductTitle,
  ProductImage,
  ProductButtons,
  ProductCard,
} from '../components';
import { products } from '../data';

import '../styles/custom-styles.css';

const product = products[0];
export const ShoppingPage = () => {
  
  
  return (
    <div>
      <h1 style={{ marginBottom: 18 }}> Shopping Store </h1>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          
          <ProductCard 
              key={product.id}
              product={product} 
              className='bg-dark'
              initialValues={{ 
                count: 4,
                maxCount:10
              }}
            >
            {
              ({ reset, increaseBy, count, isMaxCountReached }) => (
                <>
                  <ProductImage 
                    className='custom-img' 
                    style={{ boxShadow:' 10px 10px 10px rgba(0,0,0, .2)' }} />
                  <ProductTitle 
                    className='text-white font-bold' />
                  <ProductButtons 
                    className='custom-buttons text-white font-bold' />
                    <button className='reset-button' onClick={ reset }>
                      Reset
                    </button>
                    
                    { isMaxCountReached ?
                        <button className='reset-button' onClick={ () => increaseBy(-2) }>
                          -2
                        </button>
                        :
                        <button className='reset-button' onClick={ () => increaseBy(2) }>
                           +2
                        </button>
                    }
                    <div style={{flex:1}}></div>
                </> 
              )
            }
          </ProductCard>
      </div>
    </div>
  );
};
