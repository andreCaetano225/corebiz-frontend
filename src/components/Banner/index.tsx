import { Swiper, SwiperSlide } from 'swiper/react';

import BannerImg01 from '../../assets/banners/banner01.png';
import BannerImg02 from '../../assets/banners/banner02.png';
import BannerImg03 from '../../assets/banners/banner03.png';
import { Pagination, Autoplay } from 'swiper';

export const Banner = () => {
  return (
    <>
      <section>
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
            <img src={BannerImg01} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerImg02} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerImg03} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
