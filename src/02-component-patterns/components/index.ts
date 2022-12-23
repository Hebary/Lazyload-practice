
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'
import {ProductCard as ProductCardHOC } from './ProductCard'

export { ProductImage } from './ProductImage'
export { ProductTitle } from './ProductTitle'
export { ProductButtons } from './ProductButtons'


//component assignment
export const ProductCard = Object.assign( ProductCardHOC, {
    Image: ProductImage,
    Title : ProductTitle,
    Buttons: ProductButtons
})