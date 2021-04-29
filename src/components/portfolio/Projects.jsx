import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllProjects} from '../../redux/actions/projectsActions'
import ProjectItem from './ProjectItem'
import {Grid, GridColumn} from 'semantic-ui-react'

const Projects = ({activeItem}) => {
  const dispatch = useDispatch()
  const categoryProjects = useSelector(({projectsReducers}) => projectsReducers.projects.filter(p => activeItem === 'All' ? p : p.category === activeItem))

  useEffect(() => {
    dispatch(getAllProjects())
  }, [dispatch])

  return (
    <Grid padded={'horizontally'} centered>
      {
        categoryProjects?.map(project => (
          <GridColumn stretched={false} key={project.id} widescreen={3} largeScreen={4} computer={5} mobile={13} tablet={8}>
            <ProjectItem project={project}/>
          </GridColumn>
        ))
      }
    </Grid>
  )
}

export default Projects