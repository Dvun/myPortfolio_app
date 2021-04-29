import styled from 'styled-components'

export const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
  }

  .links {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    @media (max-width: 811px) {
      .links {
        width: 100%;
      }
    }

    @media (max-width: 440px) {
      left: 45%;
      text-align: center;
    }
  }

  .typography {
    font-size: 4rem;
    color: var(--white-color);
    margin-bottom: 2rem;

    span {
      font-size: 4rem;
      color: var(--primary-color);
    }
  }

  @media (max-width: 1311px) {
    .typography {
      font-size: 3rem;

      span {
        font-size: 3rem;
      }
    }
  }

    @media (max-width: 440px) {
      .typography {
        font-size: 1.6rem;

        span {
          font-size: 1.6rem;
        }
      }
    }

    p {
      font-size: 2vw;

      @media (max-width: 440px) {
        font-size: 1rem;
      }
    }

    .icons {
      margin-top: 1rem;

      .icon {
        border: 2px solid var(--border-color);
        display: inline-flex;
        border-radius: 50%;
        margin-right: 1rem;
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }

        &:last-child {
          margin-right: 0;
        }

        svg {
          margin: 0.5rem;
        }
      }
    }
  
`
