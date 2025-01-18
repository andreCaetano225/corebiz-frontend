import { ProductType } from '../../types/product';
import './featured.scss';
import { Product } from './Product';

interface FeaturedProductProps {
  isMobile: boolean;
  products: ProductType[];
  loading: boolean;
}

export const FeaturedProduct = ({
  isMobile,
  products,
  loading,
}: FeaturedProductProps) => {
  return (
    <>
      <section className="featuredProduct">
        <div className="featuredProduct__div">
          <h2>Mais Vendidos</h2>
          <Product isMobile={isMobile} products={products} loading={loading} />
        </div>
      </section>
    </>
  );
};
