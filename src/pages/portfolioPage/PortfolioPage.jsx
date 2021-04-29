import React from 'react'
import Title from '../../components/title/Title'
import {MainLayout} from '../../styles/Layouts'
import Portfolio from '../../components/portfolio/Portfolio'

const PortfolioPage = () => {
  return (
    <MainLayout>
      <Title title={'Portfolio'} span={'Portfolio'}/>
      <Portfolio/>
    </MainLayout>
  )
}

export default PortfolioPage
