import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { GreenTitle } from "../GreenTitle";
import { CarouselContent } from "./CarouselContent";
import { Container, ImageSlide, SlideWrapper } from "./styles";

export function Carousel() {
  return (
    <Container>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {Object.entries(CarouselContent).map(([key, datas]) => (
          <SwiperSlide key={key}>
            <SlideWrapper>
              <ImageSlide src={datas.img} alt={datas.title} />
              <GreenTitle>{datas.title}</GreenTitle>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
