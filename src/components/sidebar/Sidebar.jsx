import React from 'react'
import Navigation from './Navigation'
import { SideBarStyled } from './styles'

const Sidebar = ({navToggle, setNavToggle}) => {
  return (
    <SideBarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
      <Navigation setNavToggle={setNavToggle}/>
    </SideBarStyled>
  )
}

export default Sidebar
