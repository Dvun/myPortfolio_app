import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'

export const GridStyled = styled(Grid)`
  .seven.wide.computer.sixteen.wide.mobile.column {
    display: flex;
    justify-content: center;

    @media (max-width: 440px) {
      width: 100%;
    }
  }

  .ui.huge.header {
    color: white;
  }

  p {
    font-size: 1.5rem;
  }
  
  .ui.image {
    object-fit: cover;
  }

  @media (max-width: 990px) {
    .ui.huge.header {
      margin-top: 1rem;
      text-align: center;
    }

    .ui.image {
      width: 100%;
    }
  }
`
