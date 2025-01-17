import StarRating from '../Star';
import { ProductType } from './types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ArrowLeaft from '../../../assets/left-arrow.svg';
import ArrowRight from '../../../assets/right-arrow.svg';

const data = [
  {
    productId: 1,
    productName: 'SAPATO FLOATER PRETO',
    stars: 1,
    imageUrl: 'https://corebiz-test-server.onrender.com/images/product-1.png',
    listPrice: null,
    price: 25990,
    installments: [
      {
        quantity: 9,
        value: 2887,
      },
    ],
  },
  {
    productId: 2,
    productName: 'SANDÁLIA LINHO BROWN',
    stars: 4,
    imageUrl: 'https://corebiz-test-server.onrender.com/images/product-2.png',
    listPrice: 29900,
    price: 19900,
    installments: [
      {
        quantity: 4,
        value: 4975,
      },
    ],
  },
  {
    productId: 3,
    productName: 'BOTA MUSTANG PRETO',
    stars: 2,
    imageUrl: 'https://corebiz-test-server.onrender.com/images/product-3.png',
    listPrice: 32900,
    price: 29900,
    installments: [
      {
        quantity: 10,
        value: 2990,
      },
    ],
  },
  {
    productId: 4,
    productName: 'CINTO SEMICROMO PRETO 40MM',
    stars: 3,
    imageUrl: 'https://corebiz-test-server.onrender.com/images/product-4.png',
    listPrice: null,
    price: 7990,
    installments: [],
  },
  {
    productId: 4,
    productName: 'CINTO SEMICROMO PRETO 40MM',
    stars: 3,
    imageUrl: 'https://corebiz-test-server.onrender.com/images/product-4.png',
    listPrice: null,
    price: 7990,
    installments: [],
  },
  {
    productId: 4,
    productName: 'CINTO SEMICROMO PRETO 40MM',
    stars: 3,
    imageUrl: 'https://corebiz-test-server.onrender.com/images/product-4.png',
    listPrice: null,
    price: 7990,
    installments: [],
  },
];

export const Product = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
      >
        {data.map((item: ProductType, index) => (
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
