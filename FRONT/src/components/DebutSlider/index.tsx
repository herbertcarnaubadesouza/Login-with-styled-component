import React, { useState } from 'react'
import { Container } from './styles'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper'
import { DebutSlide } from './DebutSlide'

interface DebutSliderProps {
  // children: ReactChild
}

const SwiperButtonNext = () => {
  const swiper = useSwiper()

  return (
    <button className="slider-button" onClick={() => swiper.slideNext()}>
      <BsChevronRight size={'1.5rem'} strokeWidth='1' />
    </button>
  )
}

const SwiperButtonPrev = () => {
  const swiper = useSwiper()

  return (
    <button className="slider-button" onClick={() => swiper.slidePrev()}>
      <BsChevronLeft size={'1.5rem'} strokeWidth='1' />
    </button>
  )
}

export function DebutSlider({}: DebutSliderProps) {
  const [isFirstSlide, setIsFirstSlide] = useState(true)
  const [isLastSlide, setIsLastSlide] = useState(false)

  return (
    <Container>
      <Swiper
        pagination={{
          type: 'fraction',
          el: '.slider-pagination',
        }}
        spaceBetween={40}
        slidesPerView={"auto"}
        modules={[ Pagination, Navigation ]}
        className="debutSwiper"
        onSlideChange={(swiper) => {
          setIsFirstSlide(swiper.isBeginning)
          setIsLastSlide(swiper.isEnd)
        }}
      >
        <SwiperSlide>
          <DebutSlide name={'Nome do curso'} debutDate={new Date()} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae, odit eligendi doloribus nam itaque aperiam ducimus eos optio voluptatum excepturi asperiores, perspiciatis natus tempora!'} />
        </SwiperSlide>
        <SwiperSlide>
        <DebutSlide name={'Nome do curso'} debutDate={new Date()} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae, odit eligendi doloribus nam itaque aperiam ducimus eos optio voluptatum excepturi asperiores, perspiciatis natus tempora!'} />
        </SwiperSlide>
        <SwiperSlide>
        <DebutSlide name={'Nome do curso'} debutDate={new Date()} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae, odit eligendi doloribus nam itaque aperiam ducimus eos optio voluptatum excepturi asperiores, perspiciatis natus tempora!'} />
        </SwiperSlide>
        <SwiperSlide>
        <DebutSlide name={'Nome do curso'} debutDate={new Date()} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae, odit eligendi doloribus nam itaque aperiam ducimus eos optio voluptatum excepturi asperiores, perspiciatis natus tempora!'} />
        </SwiperSlide>
        <div className="slider-controls">
          {!isFirstSlide && <SwiperButtonPrev />}
          <p className="slider-pagination" />
          {!isLastSlide && <SwiperButtonNext />}
        </div>
      </Swiper>
    </Container>
  )
}