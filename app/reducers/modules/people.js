import { REHYDRATE } from 'redux-persist/constants'

const initialState = {
  byId: []
}

export default function people (state=initialState, action) {
  switch (action.type) {
    case 'LIST_PEOPLE':
      return {
        ...state,
        byId: action.results
      };

    default:
      return state
  }
}
