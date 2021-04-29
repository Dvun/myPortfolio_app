import React from 'react'
import { AboutStyled } from './styles'
import {MainLayoutAbout} from '../../styles/Layouts'
import Title from '../../components/title/Title'
import ImageSection from '../../components/imageSection/ImageSection'
import ServicesSection from '../../components/servicesSection/ServicesSection'

const AboutPage = () => {
  return (
    <MainLayoutAbout>
      <AboutStyled>
        <Title title='About Me' span='About Me' />
        <ImageSection />
        <ServicesSection/>
      </AboutStyled>
    </MainLayoutAbout>
  )
}


export default AboutPage
