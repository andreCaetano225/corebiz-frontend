import { ProductType } from '../../../types/product';
import { ProductDesktop } from './swiperDesktop';
import { ProductMobile } from './swiperMobile';

interface ProductProps {
  isMobile: boolean;
  products: ProductType[];
  loading: boolean;
}

export const Product = ({ isMobile, products, loading }: ProductProps) => {
  return (
    <>
      <div>
        {isMobile ? (
          <ProductMobile products={products} loading={loading} />
        ) : (
          <ProductDesktop products={products} loading={loading} />
        )}
      </div>
    </>
  );
};
