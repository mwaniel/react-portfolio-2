import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Information Architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototypes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visual design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data visualization</p>
            </li>
          </ul>
        </article>
        {/*end of ux ui*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Design Corporate websites . The purpose of corporate websites is to provide information about your business. In this way, potential clients will know how to get in touch with you</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building Ecommerce websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Portfolios</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blog Customization or Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Graphic Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Website Development</p>
            </li>
          </ul>
        </article>
        {/*end of web*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Backend development </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Authentication </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cloud Storage</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Databases</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>REST API and GraphQL API</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social integration 
               </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Push notification</p>
            </li>
            <li>
            <BiCheck className='service__list-icon' />
            <p>Database Graphical user interface 
            
            </p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Cache ,
          CDN </p>
        </li>
        <li>
        <BiCheck className='service__list-icon' />
        <p> Logs ,
        Geo location ,
        Cloud code function</p>
      </li>
          </ul>
        </article>
        {/*end of backend*/}
      </div>
    </section>
  );
}

export default Services
