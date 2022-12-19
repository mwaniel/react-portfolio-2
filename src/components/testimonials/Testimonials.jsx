import React from 'react'
import './testimonials.css'
import PIC from '../../assets/imagess/pass.png'

 // core version + navigation, pagination modules:
 import  {  Pagination } from 'swiper';
 
 import { Swiper, SwiperSlide } from 'swiper/react';
 // import Swiper and modules styles
 import 'swiper/css';
 import 'swiper/css/pagination';



const data = [
  {
    avatar: PIC,
    name: 'Samuel',
    review:'I am the director of Umeme networeks  nad working with Daniel has been wonderfull, he has gone beyond my  expectation and proven to be well experienced.He is  a great asset at the company '
  },
  {
    avatar: PIC,
    name: 'Dennis Mussili',
    review: 'Am the ceo of saibba tech and i can say that Daniel is a good guy.Knows his tools well.'
  },
  {
    avatar: PIC,
    name: 'Benjamin ',
    review:'A+ services, what i love most about him is that whenever I have an issue, he sort it,follow up and contact me until satisfaction.'
  },
 
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' 
      //install swipper
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}>
      {
        data.map(({avatar, name, review}, index) =>{
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='avatar'/>
              </div> 
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                    {review}
                </small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials