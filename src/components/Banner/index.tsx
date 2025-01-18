import { Swiper, SwiperSlide } from 'swiper/react';
import BannerImg01 from '../../assets/banners/banner01.png';
import BannerImg02 from '../../assets/banners/banner02.png';
import BannerImg03 from '../../assets/banners/banner03.png';
import BannerImg01Mobile from '../../assets/banners/banner01Mobile.png';
import BannerImg02Mobile from '../../assets/banners/banner02Mobile.png';
import BannerImg03Mobile from '../../assets/banners/banner03Mobile.png';
import { Pagination, Autoplay } from 'swiper';
import './banner.scss';

interface BannerProps {
  isMobile: boolean;
}

export const Banner = ({ isMobile }: BannerProps) => {
  return (
    <>
      <section className="banner">
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          speed={2000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img
              src={isMobile ? BannerImg01Mobile : BannerImg01}
              alt="Banner 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={isMobile ? BannerImg02Mobile : BannerImg02}
              alt="Banner 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={isMobile ? BannerImg03Mobile : BannerImg03}
              alt="Banner 3"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
