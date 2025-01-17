import { ProductType } from './types';

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
];

export const Product = () => {
  return (
    <>
      <div className="featuredProduct__direction-item">
        {data.map((item: ProductType, index) => {
          return (
            <>
              <div className="featuredProduct__item">
                <img src={item.imageUrl} alt="" />
                <span>{item.productName}</span>
                {item.listPrice
                  ? `de ${(item.listPrice / 100).toFixed(2).replace('.', ',')}`
                  : null}
                <p>por R$ {(item.price / 100).toFixed(2).replace('.', ',')}</p>
                <p>
                  {item.installments.length > 0 ? (
                    <>
                      ou em {item.installments[0].quantity}x de R${' '}
                      {(item.installments[0].value / 100)
                        .toFixed(2)
                        .replace('.', ',')}
                    </>
                  ) : null}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
