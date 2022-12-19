import React from 'react'
import {BsGlobe, BsLinkedin} from 'react-icons/bs' 
import {BsGithub} from 'react-icons/bs'
import {BsGlobe2} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mwaniki-daniel/' target='_blank' ><BsLinkedin/></a>
        <a href='https://github.com/mwaniel' target='_blank'><BsGithub/></a>
        <a href='https://mwaniel.github.io/portfolio1/' target='_blank'><BsGlobe2/></a>
    </div>
  )
}

export default HeaderSocials