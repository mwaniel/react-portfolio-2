import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/imagess/Big bytes.png'
import IMG2 from '../../assets/imagess/Umeme Kenya (1).png'
import IMG3 from '../../assets/imagess/Mukiriti __ Market (1).png'
import IMG4 from '../../assets/imagess/My Portfolio.png'
import IMG5 from '../../assets/imagess/cloud (1).png'
import IMG6 from '../../assets/imagess/top-tierwriter.com.png'
import IMG7 from '../../assets/imagess/Gandtourism.png'
import IMG8 from '../../assets/imagess/Ssaiibba (1).png'
import IMG9 from '../../assets/imagess/Umeme Networks Engineering Solutions LTD (1).png'
import IMG10 from '../../assets/imagess/Safari Rugby (1).png'


const data =[
  {
    id: 1,
    image: IMG2,
    title: 'Umeme Networks, an automation and electrical company based in thika.Website build with bootstrap, css , html , php',
    demo : 'https://umemenetworks.co.ke/'
  },
  {
    id: 2,
    image: IMG3,
    title: 'An e commerce website based in Thika Kenya.Works alot like ebay or amazon.Technologies employed include Php Laravel,SQL,html bootstrap, css',
    demo : 'https://mukiriti.com/'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Big bytes a website build for catering services.based in United Kingdom,Designed and build with html ,css ,bootstrap and php.',
    demo : 'http://bigbytesltd.uk/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'My other portfolio,a project build to demonstrate my skills in web development.Technologies employed include css, html ,bootstrap ,npm , nodejs',
    github: 'https://github.com/mwaniel/portfolio1',
    demo : 'https://mwaniel.github.io/portfolio1/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cloud solutions is a company based in Kenya ,website employes css,html ,bootstrap  and php',
    demo : 'https://cloud.umemenetworks.co.ke/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Top tier-writers is a freelace web site that allows both workers nad clients to do and give out projects with supervision from the admin.Technologies employed include PHP Laravel, SQL ,bootsrap, css and html',
    demo : 'https://top-tierwriter.com/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'A webapp build with the aim of improving tourism in kenya,app allows bookings  of hotels has a separate blog where blogs can be posted and writen by publishers ,defrent sections of the site are managed by admin.Technologies employed include css, html ,bootstrap ,laravel , sql',
    github: 'https://github.com/mwaniel/tourisim'
    
  },
  {
    id: 8,
    image: IMG8,
    title: 'A technology company based in Gilgil kenya, Tech employed html ,css, javascript,php',
    demo : 'https://design7.bigbytesltd.uk/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Umeme networks first web site before the change  but still under constraction,supposed tobe a simless web app capable of intergrating with smart home devices , Tech employed html ,css, javascript,php laravel and sql',
    github: 'https://github.com/mwaniel/umeme'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Safari rugby app under construction,will enable  management of team members blogs and events . Tech employed html ,css, javascript,php laravel and sql',
    demo : 'http://safarirugby.com/'
  },
  
  
  

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
          {
            data.map(({id, image, title, github, demo}) =>{
              return(
                  <article  key={id} className='portfolio__item'>
                    <div className='portfolio__item-image'>
                      <img  height='260px' src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio__item-cta'>
                      <a href={github} className='btn' target='_blank'>Github</a>
                      <a href={demo} className='btn btn-primary' target ='_blank'>Live demo </a>
                    </div>
                  </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Portfolio