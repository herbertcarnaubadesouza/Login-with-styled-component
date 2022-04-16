import styled from "styled-components";

export const Container = styled.div`
  .slider-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    margin-top: 1rem;

    .slider-pagination {
      width: fit-content;
      letter-spacing: 2px;
    }
  }

  .slider-button {
    background: none;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    aspect-ratio: 1 / 1;
    padding: 4px;

    transition: filter 0.2s ease;

    &:hover, &:focus, &:focus-visible {
      filter: brightness(0.8);
      outline: none;
    }
  }

  .swiper {
    width: 100%;
  }

  .swiper-wrapper {
    min-height: 100%;
  }

  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    --swiper-navigation-size: 1.2rem;
    font-weight: bold;
    top: auto;
    bottom: 13px;
    color: #b3b3b3;
    z-index: 20;
  }
  .swiper-button-prev {
    left: calc(50% - 3.5rem);
  }
  .swiper-button-next {
    right: calc(50% - 3.5rem);
  }

  .slider-pagination {
    color: #b3b3b3;

    .swiper-pagination-current {
      color: white;
    }
  }

  .swiper-button-disabled {
    display: none;
  }
`;