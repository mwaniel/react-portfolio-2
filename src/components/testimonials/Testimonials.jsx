import React from 'react'
import './testimonials.css'
import PIC from '../../assets/me-about.jpg'

 // core version + navigation, pagination modules:
 import  {  Pagination } from 'swiper';
 
 import { Swiper, SwiperSlide } from 'swiper/react';
 // import Swiper and modules styles
 import 'swiper/css';
 import 'swiper/css/pagination';



const data = [
  {
    avatar: PIC,
    name: 'tinashow',
    review:'Reprehenderit cillum esse cillum minim sit aliqua ad eiusmod id nulla sit non elit. Proident qui dolor in dolore voluptate deserunt irure aliqua commodo laboris. Est ut consequat est mollit enim cillum anim labore minim anim.'
  },
  {
    avatar: PIC,
    name: 'dante dante',
    review: 'Proident sit occaecat ea anim. Ullamco occaecat ipsum proident eiusmod est aute aliqua occaecat occaecat cupidatat. Ullamco quis ex quis fugiat. Non culpa nulla duis reprehenderit tempor ea ex est consectetur in. Sint dolore cupidatat amet do ad laborum et do. Minim id culpa officia mollit. Sunt laboris laboris labore eiusmod pariatur sit.'
  },
  {
    avatar: PIC,
    name: 'kevo manu',
    review:'Non et enim ut ex sunt commodo dolore nostrud ut. Tempor aliqua est deserunt aliqua in est laborum nostrud exercitation. Proident pariatur culpa consequat et incididunt do ex elit Lorem cupidatat laborum culpa officia proident.'
  },
  {
    avatar: PIC,
    name: 'john kuria',
    review:'Ullamco incididunt consequat ea ipsum irure voluptate do consectetur elit quis. Deserunt tempor in officia irure. Veniam ex duis sit magna in proident ea. Officia nostrud ea esse id consectetur qui laboris non.'
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