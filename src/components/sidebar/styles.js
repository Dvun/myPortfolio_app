import styled from 'styled-components'

export const SideBarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  transition: all .4s ease-in-out;
  
  @media (max-width: 1024px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  & .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;

    img {
      object-fit: cover;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  & .nav-items {
    width: 100%;
    text-align: center;

    .active-class {
      background-color: var(--primary-color);
    }

    li {
      display: block;

      a {
        display: block;
        padding: 0.55rem 0;
        position: relative;
        font-weight: 600;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
        }

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: all 0.3s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    text-align: center;

    p {
      padding: 1rem 0;
      font-size: 1.1.rem;
    }
  }
`
