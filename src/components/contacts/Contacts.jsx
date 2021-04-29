import React from 'react'
import ContactItem from './ContactItem'
import {List} from 'semantic-ui-react'
import styled from 'styled-components'

const Contacts = () => {
  return (
    <StyledList>
      <ContactItem icon='phone' device='tel:+358405920054' displayName='+358405920054'/>
      <ContactItem icon='mail' device='mailto:roman084@gmx.com' displayName='roman084@gmx.com'/>
      <ContactItem icon='telegram' device='https://t.me/Slider84' displayName='@Slider84'/>
    </StyledList>
  )
}

const StyledList = styled(List)`
  //.item {
  //  padding: 2rem;
  //}
`

export default Contacts