import './Proof2.css'
import Item from './Satisfaction/Stisfaction';
import profile1 from './../../atsses/image/profile1.png';
import profile2 from './../../atsses/image/profile2.png';
import profile3 from './../../atsses/image/profile3.png';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Proof2() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <Item src={profile1} model="October flowers!" paragraph="Absolutely beautiful bouquet and arrived quickly on same day.Lovely flowers.Thank you!"/> </SwiperSlide>
        <SwiperSlide> <Item src={profile2} model="Dily Bouquet" paragraph="Beautiful flowers and the person loved them thank you" /> </SwiperSlide>
        <SwiperSlide> <Item src={profile3} model="special design" paragraph="The bouquet I ordered was absolutely amazing exactly what I had in mind" /> </SwiperSlide>

      </Swiper>
    </>
  );
}
