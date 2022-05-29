import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselContent } from './CarouselContent';
import { GreenTitle } from '../GreenTitle';

import 'swiper/css';
import 'swiper/css/pagination';

import { 
    Container, 
    SlideWrapper, 
    ImageSlide 
} from './styles';

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
                            <ImageSlide src={datas.img}/>
                            <GreenTitle>{datas.title}</GreenTitle>
                        </SlideWrapper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};