import './featured.scss';
import { Product } from './Product';

interface FeaturedProductProps {
  isMobile: boolean;
}

export const FeaturedProduct = ({ isMobile }: FeaturedProductProps) => {
  return (
    <>
      <section className="featuredProduct">
        <div className="featuredProduct__div">
          <h2>Mais Vendidos</h2>
          <Product isMobile={isMobile} />
        </div>
      </section>
    </>
  );
};
