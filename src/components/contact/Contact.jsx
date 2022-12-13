import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessageLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mwaniel03@gmail.com</h5>
            <a href='mailto:mwaniel03@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessageLine className='contact__option-icon'/>
            <h4>messager</h4>
            <h5>mwaniel</h5>
            <a href='#' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+254702247235</h5>
            <a href='https://api.whatsapp.com/send?phone=+254702247235' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* end of contact options*/}
        <form action="">
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact
