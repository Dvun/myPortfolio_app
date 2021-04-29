import React from 'react'
import styled from 'styled-components'
import cv from '../img/Roman_Seveljov_CV.pdf'

const PrimaryButton = () => {
  return (
    <StyledButton href={cv} target='_blank'>
      Download CV
    </StyledButton>
  )
}

const StyledButton = styled.a`
  margin-top: 5rem;
  background-color: var(--primary-color);
  padding: 1rem 2.5rem;
  cursor: pointer;
  color: white;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white;
  }

  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: var(--white-color);
    left: 0;
    bottom: 0;
  }
`

export default PrimaryButton
