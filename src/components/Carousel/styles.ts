import styled from 'styled-components';

export const Container = styled.div`
    width: 95%;
    margin: 2.5rem 0;

    .swiper {
        width: 100%;
    }

    .swiper-pagination {
        position: unset;
        margin-top: 1.9rem;
    }

    .swiper-pagination-bullet {
        height: 4px;
        width: 4px;
    }

    .swiper-pagination-bullet-active {
        background: var(--green100);
    }
`

export const SlideWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        max-width: 18.75rem;
    }
`

export const ImageSlide = styled.img`
    height: 20.75rem;

    @media (max-width: 450px) {
        height: 13rem
    }
`