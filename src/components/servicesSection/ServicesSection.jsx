import React from 'react'
import {InnerLayout} from '../../styles/Layouts'
import Title from '../title/Title'
import SkillsSection from './SkillsSection'

const ServicesSection = () => {
  return (
    <InnerLayout>
      <Title title="My Skills" span="My Skills"/>
      <div className="services">
        <SkillsSection skills={[
          {id: 2, name: 'React', progress: 80},
          {id: 3, name: 'Node JS', progress: 70},
          {id: 1, name: 'JavaScript', progress: 70},
          {id: 4, name: 'HTML5', progress: 90},
          {id: 5, name: 'CSS3', progress: 80},
          {id: 6, name: 'Styled-Components', progress: 70},
        ]}/>
      </div>
    </InnerLayout>
  )
}

export default ServicesSection