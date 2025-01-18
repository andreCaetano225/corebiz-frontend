import { ProductDesktop } from './swiperDesktop';
import { ProductMobile } from './swiperMobile';

interface ProductProps {
  isMobile: boolean;
}

export const Product = ({ isMobile }: ProductProps) => {
  return (
    <>
      <div>{isMobile ? <ProductMobile /> : <ProductDesktop />}</div>
    </>
  );
};
