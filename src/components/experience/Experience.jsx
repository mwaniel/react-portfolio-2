import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
                <h4>Html</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
               </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>    
                <h4>Vue</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
               <div> 
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                 <div> 
                  <h4>Css</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                  </article>
                  <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
               <div> 
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
                </article>
        </div>
      </div>
      {/*end of front end*/}

      <div className='experience__backend'>
        <h3>backend Development</h3>
        <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>  
                 <h4>PHP Laravel</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>  
                 <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>  
                 <h4>Databases</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>  
                 <h4>Nodejs</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Ruby</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>
            
            
        </div>
      </div>
    </div>
    </section>
  );
}

export default Experience
