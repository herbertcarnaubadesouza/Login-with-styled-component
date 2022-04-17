import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 3rem;

  .category {
    .swiper-slide {
      width: auto;
    }

    .swiper-button-prev,
    .swiper-button-next {
      --swiper-gradient-direction: -90deg;
      --swiper-navigation-size: 1.2rem;
      font-weight: bold;

      width: 4rem;
      height: 100%;
      top: 0;
      margin-top: 0;
      background-image: linear-gradient(var(--swiper-gradient-direction), transparent, rgb(0 0 0 / 0.3) 25%, rgb(0 0 0 / 0.7));

      color: white;
    }

    .swiper-button-prev {
      left: 0;
    }
    .swiper-button-next {
      --swiper-gradient-direction: 90deg;
      right: 0;
    }

    .swiper-button-disabled {
      display: none;
    }
  }

  .debuts {
    margin-top: 3rem;

    a {
      margin-inline: auto;
      max-width: fit-content;
    }
  }

  .available-devices {
    margin-block: 3rem;
    background-color: rgb(119 20 168 / 0.35);
  }

  .pricing {
    margin-bottom: 3rem;

    .pricing-content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }
  }
`;