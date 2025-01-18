import ContentLoader from 'react-content-loader'; // Importação do React Content Loader
import StarRating from '../Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ArrowLeaft from '../../../assets/left-arrow.svg';
import ArrowRight from '../../../assets/right-arrow.svg';
import { ProductType } from '../../../types/product';

interface ProductMobile {
  products: ProductType[];
  loading: boolean; // Adicionado um prop para indicar o estado de carregamento
}

export const ProductDesktop = ({ products, loading }: ProductMobile) => {
  // Loader para um produto enquanto os dados não chegam
  const ProductLoader = () => (
    <div className="featuredProduct__item">
      <ContentLoader
        speed={2}
        width={200}
        height={300}
        viewBox="0 0 200 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="200" height="150" />
        <rect x="0" y="160" rx="5" ry="5" width="150" height="15" />
        <rect x="0" y="185" rx="5" ry="5" width="100" height="15" />
        <rect x="0" y="210" rx="5" ry="5" width="120" height="15" />
        <rect x="0" y="240" rx="5" ry="5" width="80" height="30" />
      </ContentLoader>
    </div>
  );

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
                <ProductLoader />
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
                      <button>COMPRAR</button>
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
