import styled from 'styled-components'

export const AppStyled = styled.div`
  .main-content {
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;

    @media (max-width: 1024px) {
      margin-left: 0;
    }

    .lines {
      position: absolute;
      height: 100%;
      min-height: 100vh;
      width: 100%;
      display: flex;
      justify-content: space-evenly;

      .line-1,
      .line-2,
      .line-3,
      .line-4 {
        width: 1px;
        min-height: 100vh;
        background-color: var(--border-color);
      }
    }
  }
`
