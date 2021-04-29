import React from 'react'
import { GridStyled } from './styles'
import me from '../../img/me.png'
import { GridColumn, GridRow, Header, Image } from 'semantic-ui-react'
import PrimaryButton from '../PrimaryButton'

const ImageSection = () => {
  return (
    <GridStyled>
      <GridRow centered textAlign={'center'}>
        <GridColumn computer={7} mobile={10}>
          <Image src={me} alt='my pic'/>
        </GridColumn>
        <GridColumn
          computer={9}
          mobile={13}
        >
          <Header size='huge' as='h1' content='Full-Stack web developer' />
          <p>Working with React JS, Redux, Node JS, JavaScript.</p>
          <br />
          <p>
            Skills:
            <br />
            HTML, CSS, SCSS, React.JS, Redux, Node.JS, Material UI, Bootstrap,
            React-bootstrap, Styled-Components, SQL, NoSQL, MongoDB, Heroku,
            Docker
          </p>
          <PrimaryButton />
        </GridColumn>
      </GridRow>
    </GridStyled>
  )
}

export default ImageSection
