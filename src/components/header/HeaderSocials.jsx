import React from 'react'
import {BsGlobe, BsLinkedin} from 'react-icons/bs' 
import {BsGithub} from 'react-icons/bs'
import {BsGlobe2} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='http://linkein.com' target='_blank' ><BsLinkedin/></a>
        <a href='http://github.com' target='_blank'><BsGithub/></a>
        <a href='http://website2.com' target='_blank'><BsGlobe2/></a>
    </div>
  )
}

export default HeaderSocials