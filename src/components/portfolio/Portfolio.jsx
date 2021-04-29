import React, {useState} from 'react'
import PortfolioTabs from './PortfolioTabs'
import Projects from './Projects'
import {useSelector} from 'react-redux'

const Portfolio = () => {
  const [activeItem, setActiveItem] = useState('All')
  const allMenuItems = useSelector(({projectsReducers}) => ['All', ...new Set(projectsReducers.projects.map(item => item.category))])
  return (
    <>
      <PortfolioTabs activeItem={activeItem} menuItems={allMenuItems} setActiveItem={setActiveItem}/>
      <Projects activeItem={activeItem}/>
    </>
  )
}

export default Portfolio