import React from 'react'
import {Card, Image, Reveal} from 'semantic-ui-react'
import styled from 'styled-components'

const ProjectItem = ({project}) => {
  return (
    <CardStyled>
      <Reveal animated='move' instant>
        <Reveal.Content visible>
          <Image src={project.img} size={'small'}/>
        </Reveal.Content>
        <Reveal.Content hidden style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} >
          <a href={project.GitHub} target='_blank' rel='noreferrer'>Github</a>
          <a href={project.liveDemo}  target='_blank' rel='noreferrer'>Live Demo</a>
        </Reveal.Content>
      </Reveal>
      <Card.Content className='bottomContent'>
        <Card.Description textAlign={'center'}>
          {project.aboutText}
        </Card.Description>
      </Card.Content>
    </CardStyled>
  )
}

const CardStyled = styled(Card)`
  width: 100%;
  min-width: 190px;
  background-color: var(--background-light-color-2)!important;
  
  .ui.move.instant.reveal {
    background-color: var(--scrollbar-thump-color);
  }
  
  .ui.small.image {
    width: 100%;
    height: 150px;
  }
  
  .center.aligned.description {
    color: var(--font-light-color);
  }
  
  .bottomContent {
    padding: .5rem .5rem!important;
  }
  
  a {
    color: white;
    font-size: 1.2rem;
    margin-top: 1.3rem;
    padding: .8rem 1rem;
    border: 1px solid var(--primary-color);
    transition: all .3s ease-in-out;
    border-radius: 10px;
  }
  
  a:hover {
    background-color: var(--primary-color);
  }
`

export default ProjectItem