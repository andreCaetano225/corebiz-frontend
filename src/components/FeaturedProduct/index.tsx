import './featured.scss';
import { Product } from './Product';

export const FeaturedProduct = () => {
  return (
    <>
      <section className="featuredProduct">
        <div className="featuredProduct__div">
          <h2>Mais Vendidos</h2>
          <Product />
        </div>
      </section>
    </>
  );
};
