import { Swiper, SwiperSlide } from 'swiper/react';

import BannerImg from '../../assets/Banner.png';
import { Pagination } from 'swiper';



export const Banner = () => {
  return (
    <>
      <section>
        <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={BannerImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerImg} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
