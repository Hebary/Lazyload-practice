import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as ProductTitleProps } from '../components/ProductTitle'
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
  id: string;
  img ?: string;
  title: string;
}

export interface ProductContextProps {
  count: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number
}

export interface ProductCardHOCProps {
    
    ({ product, children }: ProductCardProps): JSX.Element,
      Buttons: (Props: ProductButtonsProps) => JSX.Element
      Image:   (Props: ProductImageProps)   => JSX.Element,
      Title:   (Props: ProductTitleProps)   => JSX.Element,

}

export interface onChangeArgs {
  count: number;
  product: Product;
}

export interface InitialValues {
  count: number;
  maxCount: number;
}