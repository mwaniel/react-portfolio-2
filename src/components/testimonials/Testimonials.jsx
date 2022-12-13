import React from 'react'
import './testimonials.css'
import PIC from '../../assets/me-about.jpg'

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimanials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={PIC} alt='avatar'/>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials