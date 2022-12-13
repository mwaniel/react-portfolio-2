import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import './footer.css'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Daniel</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'> Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='#'><FaFacebook/></a>
        <a href='#' ><FiInstagram/></a>
        <a href='#'><IoLogoTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Daniel Mwaniki. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer