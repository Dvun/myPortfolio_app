import React from 'react'
import styled from 'styled-components'
import {Grid, GridColumn, GridRow, Progress} from 'semantic-ui-react'

const SkillsSection = ({skills}) => {

  return (
    <SkillSection>
      <h2>My Skills:</h2>
      <Grid>
        <GridRow>
          {skills.map(skill => (
            <GridColumn key={skill.id} largeScreen={8} computer={8} mobile={16}>
              <div>
                <label>{skill.name}</label>
                <Progress size={'tiny'} percent={skill.progress}/>
              </div>
            </GridColumn>
          ))}
        </GridRow>
      </Grid>
    </SkillSection>
  )
}

const SkillSection = styled.div`
  .ui.tiny.progress {
    background-color: grey;
  }

  .bar {
    background-color: var(--primary-color) !important;
  }
`

export default SkillsSection
