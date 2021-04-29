import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavigationStyled } from './styles'
import me from '../../img/me.png'

const Navigation = ({setNavToggle}) => {
  return (
    <NavigationStyled>
      <div className='avatar'>
        <img src={me} alt='me' height='180' width='180' />
      </div>
      <ul className='nav-items' onClick={() => setNavToggle(false)}>
        <li className='nav-item'>
          <NavLink to='/' activeClassName='active-class' exact>
            HOME
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' activeClassName='active-class'>
            ABOUT
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/portfolio' activeClassName='active-class'>
            PORTFOLIO
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/contacts' activeClassName='active-class'>
            CONTACTS
          </NavLink>
        </li>
      </ul>
      <footer>
        <p>@2021 My own Portfolio</p>
      </footer>
    </NavigationStyled>
  )
}

export default Navigation
