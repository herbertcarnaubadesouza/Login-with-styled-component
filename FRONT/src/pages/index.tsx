import type { NextPage } from "next";

// import Swiper core and required modules
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { CourseCard } from "../components/CourseCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeContent } from "../components/HomeContent";
import { PageContainer } from "../components/PageContainer";
import { PricingCard } from "../components/PricingCard";
import { HeaderBanner } from "../components/HeaderBanner";

const Home: NextPage = () => {
  const swiper = useSwiper();

  return (
    <PageContainer>
      <Header />
      <HeaderBanner />
      <HomeContent>
        <>
          <div className="category">
            <h2>Em alta</h2>
            <Swiper
              modules={[Navigation, Scrollbar]}
              spaceBetween={20}
              slidesPerView={"auto"}
              navigation
              scrollbar={{
                draggable: true,
                hide: true,
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className="category-carousel"
            >
              <SwiperSlide>
                <CourseCard
                  imageURL="https://i.picsum.photos/id/900/1600/900.jpg?hmac=bnJVWykb0i0GZNh8xpulW910fWX8BEDP-TD_hyo3LI4"
                  title={"Um curso com um título muito grande"}
                  description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt, sapiente libero consequuntur quis consectetur."}
                  tag={{
                    label: 'top',
                    emphasis: '5',
                  }} />
              </SwiperSlide>
              <SwiperSlide>
                <CourseCard
                  imageURL="https://i.picsum.photos/id/347/1600/900.jpg?hmac=1L5PvusXw4FCUX56mEefta_xLD1vLGgyrnyK7ZNRx8c"
                  title={"Outro curso"}
                  description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt, sapiente libero."}
                  tag={{
                    emphasis: '-50%',
                  }} />
              </SwiperSlide>
              <SwiperSlide>
                <CourseCard
                  imageURL="https://i.picsum.photos/id/261/1600/900.jpg?hmac=mTGFi5tN-U_CMJ46G0OUXOmYlRy-gwuelxx8ZKVjnTc"
                  title={"Mais um curso"}
                  description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt, sapiente libero."} />
              </SwiperSlide>
              <SwiperSlide>
                <CourseCard
                  imageURL="https://picsum.photos/1600/900"
                  title={"Um curso com um título muito grande"}
                  description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt, sapiente libero consequuntur quis consectetur."} />
              </SwiperSlide>
              <SwiperSlide>
                <CourseCard
                  imageURL="https://i.picsum.photos/id/360/1600/900.jpg?hmac=wLAgw2wGqyqhSt2cZY0VyGw6qwOrxbca9ZjZOQn014g"
                  title={"Um curso com um título muito grande"}
                  description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt, sapiente libero consequuntur quis consectetur."} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="category">
            <h2>Novos conteúdos</h2>
            <Swiper
              modules={[Navigation, Scrollbar]}
              spaceBetween={20}
              slidesPerView={"auto"}
              navigation
              scrollbar={{
                draggable: true,
                hide: true,
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className="category-carousel"
            >   
              <SwiperSlide>
                <CourseCard
                  imageURL="https://i.picsum.photos/id/100/1600/900.jpg?hmac=BV8Tw5g5zJKiE4dsy-UqmEXX9Auz22jcLXDOe5PJ_8M"
                  title={"Outro curso"}
                  description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt, sapiente libero."}
                  tag={{
                    emphasis: '-30%',
                  }} />
              </SwiperSlide>
              <SwiperSlide>
                <CourseCard
                  imageURL="https://picsum.photos/1600/900"
                  title={"Mais um curso"}
                  description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt, sapiente libero."} />
              </SwiperSlide>
              <SwiperSlide>
                <CourseCard
                  imageURL="https://i.picsum.photos/id/931/1600/900.jpg?hmac=nzxfNzqISW2vrYATbyBer8zQaLvGApXc0HaP6Xu5OIA"
                  title={"Um curso com um título muito grande"}
                  description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt, sapiente libero consequuntur quis consectetur."} />
              </SwiperSlide>
              <SwiperSlide>
                <CourseCard
                  imageURL="https://i.picsum.photos/id/471/1600/900.jpg?hmac=vtGDOXsKvAJDSJaA2J5acyVBXLx5v046eNlKedLEPyc"
                  title={"Um curso com um título muito grande"}
                  description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt, sapiente libero consequuntur quis consectetur."}
                  tag={{
                    label: 'top',
                    emphasis: '5',
                  }} />
              </SwiperSlide>
              <SwiperSlide>
                <CourseCard
                  imageURL="https://i.picsum.photos/id/431/1600/900.jpg?hmac=EkiB8snhMSAuWHVhG9gJInIIYgf6iG6BnNRA-RE11wU"
                  title={"Um curso com um título muito grande"}
                  description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt, sapiente libero consequuntur quis consectetur."} />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="pricing">
            <h2>Planos</h2>
            <div className="pricing-content">
              <PricingCard plan="básico" price={9.99} />
              <PricingCard plan="Premium" price={24.99} />
              <PricingCard plan="ultra" price={39.99} />
            </div>
          </div>
        </>
      </HomeContent>
      <Footer />
    </PageContainer>
  );
};

export default Home;
