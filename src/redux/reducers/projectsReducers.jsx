import * as consts from '../constants/projectConstants'

const initialState = {
  projects: []
}

export const projectsReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case consts.FETCH_ALL_PROJECTS:
      return {
        ...state,
        projects: payload
      }

    default: return state
  }
}