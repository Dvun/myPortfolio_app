import styled from 'styled-components'
import code from '../img/code.jpg'

export const MainLayout = styled.div`
  padding: 5rem;
  height: 100%;
  max-height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: .05;
    z-index: -1;
    background-image: url(${code});
  }
  
  @media (max-width: 600px) {
    padding: .7rem;
  }

  @media (max-width: 440px) {
    padding-top: 5rem;
  }
`

export const MainLayoutAbout = styled.div`
  padding: 5rem;
  position: relative;
  height: 100vh;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: .05;
    z-index: -1;
    background-image: url(${code});
  }

  @media (max-width: 600px) {
    padding: .7rem;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  
  @media (max-width: 440px) {
    padding-top: 5rem;
  }
`

export const InnerLayout = styled.div`
  padding: 5rem 0 0 0;
`
