import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3rem;

  padding: 3rem;

  .category {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h2 {
      text-transform: capitalize;
    }
    
    .category-carousel {
      /* padding-inline: 1.5rem; */
    }

    .swiper-slide {
      width: auto;
    }

    .swiper-button-prev,
    .swiper-button-next {
      --swiper-navigation-size: 1.2rem;
      font-weight: bold;

      color: white;
    }
    .swiper-button-disabled {
      display: none;
    }
  }

  .pricing {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h2 {
      text-transform: capitalize;
    }
    .pricing-content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }
  }
`;