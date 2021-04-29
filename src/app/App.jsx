import React, {useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import HomePage from '../pages/homePage/HomePage'
import AboutPage from '../pages/aboutPage/AboutPage'
import PortfolioPage from '../pages/portfolioPage/PortfolioPage'
import ContactsPage from '../pages/contactsPage/ContactsPage'
import { AppStyled } from './styles'

function App() {
const [navToggle, setNavToggle] = useState(false)

  return (
    <AppStyled>
      <Sidebar navToggle={navToggle} setNavToggle={setNavToggle}/>

      <div className="hidden-menu" onClick={() => setNavToggle(prevState => !prevState)}>
        <i className="sidebar icon"/>
      </div>

      <div className='main-content'>
        <div className='lines'>
          <div className="line-1"/>
          <div className="line-2"/>
          <div className="line-3"/>
          <div className="line-4"/>
        </div>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/about' component={AboutPage} exact />
          <Route path='/portfolio' component={PortfolioPage} exact />
          <Route path='/contacts' component={ContactsPage} exact />
        </Switch>
      </div>
    </AppStyled>
  )
}

export default App
