import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    margin: 2.5rem 0;

    .swiper {
        width: 100%;
    }

    .swiper-pagination {
        position: unset;
        margin-top: 1.9rem;
    }

    .swiper-pagination-bullet {
        height: 0.4rem;
        width: 0.4rem;
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
`