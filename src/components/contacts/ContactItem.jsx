import React from 'react'
import {ListItem} from 'semantic-ui-react'
import styled from 'styled-components'

const ContactItem = ({icon, device, displayName}) => {
  return (
    <>
      <StyledListItem icon={icon} content={<a href={device}>{displayName}</a>}/>
    </>
  )
}

const StyledListItem = styled(ListItem)`
  padding: 3vw 5vw !important;
  border: 1px solid var(--primary-color);
  margin-bottom: 2rem;
  box-sizing: border-box;
  background-color: var(--background-light-color-2);

  i {
    font-size: 3vw;
  }

  a {
    font-size: 2vw;
    
    @media (max-width: 440px) {
      font-size: inherit;
    }
  }
  
  
`

export default ContactItem