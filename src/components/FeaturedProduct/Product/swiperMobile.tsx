import StarRating from '../Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { ProductType } from '../../../types/product';
import { ContentLoaderProduct } from './contentLoader';
import { useCartItems } from '../../../hooks/useCart';

interface ProductMobile {
  products: ProductType[];
  loading: boolean;
}

export const ProductMobile = ({ products, loading }: ProductMobile) => {
  const { addItemToCart } = useCartItems();

  return (
    <>
      <Swiper
        slidesPerView={2}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        speed={2000}
      >
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="featuredProduct__item">
                  <ContentLoaderProduct />
                </div>
              </SwiperSlide>
            ))
          : products.map((item: ProductType) => (
              <SwiperSlide key={item?.productId}>
                <div className="featuredProduct__item">
                  {item?.listPrice ? (
                    <div className="featuredProduct__container">
                      <strong>OFF</strong>
                    </div>
                  ) : null}

                  <img src={item?.imageUrl} alt={item?.productName} />
                  <div className="featuredProduct__div-item">
                    <span>{item?.productName}</span>
                    <br />
                    <StarRating rating={item?.stars} />
                    <div>
                      <span>
                        {item?.listPrice
                          ? `de R$ ${(item?.listPrice / 100).toFixed(2).replace('.', ',')}`
                          : ''}{' '}
                      </span>

                      <h3>
                        por R${' '}
                        {(item?.price / 100).toFixed(2).replace('.', ',')}
                      </h3>
                      <p>
                        {item?.installments.length > 0 ? (
                          <>
                            ou em {item?.installments[0].quantity}x de R${' '}
                            {(item?.installments[0].value / 100)
                              .toFixed(2)
                              .replace('.', ',')}
                          </>
                        ) : (
                          ''
                        )}
                      </p>
                      <button onClick={addItemToCart}>COMPRAR</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};
