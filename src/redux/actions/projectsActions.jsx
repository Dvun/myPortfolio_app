import * as consts from '../constants/projectConstants'
import {projects} from '../../app/common/sampleData'

export const getAllProjects = () => (dispatch) => {
  dispatch({type: consts.FETCH_ALL_PROJECTS, payload: projects})
}