import React from 'react'
import {Grid, GridColumn, Menu, MenuItem} from 'semantic-ui-react'
import styled from 'styled-components'

const PortfolioTabs = ({activeItem, setActiveItem, menuItems}) => {

  return (
    <Grid>
      <GridColumn computer={16} mobile={16}>
        <StyledDiv>
          <Menu pointing secondary>
            {
              menuItems.map(item => (
                <MenuItem
                  key={item}
                  name={item}
                  active={activeItem === item}
                  onClick={(e, {name}) => setActiveItem(name)}
                />
              ))
            }
          </Menu>
        </StyledDiv>
      </GridColumn>
    </Grid>
  )
}

const StyledDiv = styled.div`

  .ui.pointing.secondary.menu {
    display: flex;
    flex-wrap: wrap;
  }

  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;

  .item {
    color: white !important;
    font-size: 1.5rem;

    @media (max-width: 810px) {
      font-size: 2vw;
    }

    @media (max-width: 440px) {
      font-size: .7rem;
    }
  }

  a.active.item {
    color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
`

export default PortfolioTabs