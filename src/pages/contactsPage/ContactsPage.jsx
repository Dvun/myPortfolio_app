import React from 'react'
import {MainLayout} from '../../styles/Layouts'
import Title from '../../components/title/Title'
import Contacts from '../../components/contacts/Contacts'
import ContactForm from '../../components/contacts/ContactForm'
import {Grid, GridColumn} from 'semantic-ui-react'
import styled from 'styled-components'

const ContactsPage = () => {
  return (
    <MainLayout>
      <Title title={'Contacts'} span={'Contacts'}/>
      <StyledDiv>
        <Grid centered container>
          <GridColumn computer={8} tablet={16} mobile={16}>
            <ContactForm/>
          </GridColumn>
          <GridColumn computer={8} tablet={16} mobile={16}>
            <Contacts/>
          </GridColumn>
        </Grid>
      </StyledDiv>
    </MainLayout>
  )
}

const StyledDiv = styled.div`

  @media (max-width: 560px) {
    .ui.container {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
`

export default ContactsPage
