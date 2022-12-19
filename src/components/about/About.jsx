import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt='about image'/>
            </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>40+ WorldWide</small>
            </article>
            <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>40+ Completed</small>
            </article>
          </div>
          <p>
          Software Engineer with 2+ industry experience and determined
about solving real world problems through technology.
Leveraging analytical competencies and attention to detail in
order to deliver efficient solutions .I'm working full time at Umeme Networks where we are creating ande developing smart home automation devices and i get a chance to use my coding skills in IOT devices ,am doing freelance projects on the side for my friends. You may have noticed from my portfolio, but I'm obsessed with unique, interesting design and user-friendly functionality so hit me up with your weird artistic project ideas or app proposals.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About
