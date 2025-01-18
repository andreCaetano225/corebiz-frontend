import StarRating from '../Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ArrowLeaft from '../../../assets/left-arrow.svg';
import ArrowRight from '../../../assets/right-arrow.svg';
import { ProductType } from '../../../types/product';
import { useCartItems } from '../../../hooks/useCart';
import { ContentLoaderProduct } from './contentLoader';

interface ProductMobile {
  products: ProductType[];
  loading: boolean;
}

export const ProductDesktop = ({ products, loading }: ProductMobile) => {
  const { addItemToCart } = useCartItems();

  return (
    <>
      <Swiper
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="featuredProduct__item">
                  <ContentLoaderProduct />
                </div>
              </SwiperSlide>
            ))
          : products?.map((item: ProductType) => (
              <SwiperSlide key={item.productId}>
                <div className="featuredProduct__item">
                  {item.listPrice ? (
                    <div className="featuredProduct__container">
                      <strong>OFF</strong>
                    </div>
                  ) : null}

                  <img src={item.imageUrl} alt={item.productName} />
                  <div className="featuredProduct__div-item">
                    <span>{item.productName}</span>
                    <br />
                    <StarRating rating={item.stars} />
                    <div>
                      <span>
                        {item.listPrice
                          ? `de R$ ${(item.listPrice / 100).toFixed(2).replace('.', ',')}`
                          : ''}{' '}
                      </span>

                      <h3>
                        por R$ {(item.price / 100).toFixed(2).replace('.', ',')}
                      </h3>
                      <p>
                        {item.installments.length > 0 ? (
                          <>
                            ou em {item.installments[0].quantity}x de R${' '}
                            {(item.installments[0].value / 100)
                              .toFixed(2)
                              .replace('.', ',')}
                          </>
                        ) : (
                          ''
                        )}
                      </p>
                      {item.installments.length > 0 ? (
                        <button
                          onClick={addItemToCart}
                          style={{
                            marginTop: '1.5rem',
                          }}
                        >
                          COMPRAR
                        </button>
                      ) : (
                        <button
                          onClick={addItemToCart}
                          style={{
                            marginTop: '2.6rem',
                          }}
                        >
                          COMPRAR
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        <div className="swiper-button-prev">
          <img src={ArrowLeaft} alt="" />
        </div>
        <div className="swiper-button-next">
          <img src={ArrowRight} alt="" />
        </div>
      </Swiper>
    </>
  );
};
