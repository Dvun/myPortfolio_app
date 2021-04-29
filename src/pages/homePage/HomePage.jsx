import React from 'react'
import { Box } from '@material-ui/core'
import Particle from '../../components/Particle'
import { HomePageStyled } from './styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className='particle-container'>
        <Particle />
      </div>

      <Box as='div' className='links'>
        <div className='typography'>
          Hi I'm <span>Roman Seveljov</span>
        </div>

        <p>Full-Stack web developer on React, redux, Node JS.</p>

        <Box as='div' className='icons'>
          <a
            href='http://facebook.com/rsheveljov'
            target='_blank'
            className='icon i-facebook'
            rel='noreferrer'
          >
            <FacebookIcon fontSize='large' className='facebookIcon'/>
          </a>
          <a
            href='http://github.com/Dvun'
            target='_blank'
            className='icon i-github'
            rel='noreferrer'
          >
            <GitHubIcon fontSize='large'/>
          </a>
          <a
            href='https://www.linkedin.com/in/roman-sheveljov-696615192'
            target='_blank'
            className='icon i-linkedin'
            rel='noreferrer'
          >
            <LinkedInIcon fontSize='large'/>
          </a>
        </Box>
      </Box>
    </HomePageStyled>
  )
}

export default HomePage
