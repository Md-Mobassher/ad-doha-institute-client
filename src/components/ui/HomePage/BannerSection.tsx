"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type TSlide = {
  imageUrl: string;
};

const BannerSection = ({ slides }: any) => {
  return (
    <Box mt="12px" mb="20px">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        className="w-full h-full rounded-lg mySwiper"
      >
        {slides.map((slide: TSlide, index: number) => (
          <SwiperSlide
            key={index}
            virtualIndex={index}
            className="w-full mb-12"
          >
            <Image
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
              className="rounded-md w-full"
              width={1000}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BannerSection;
