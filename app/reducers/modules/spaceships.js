import { REHYDRATE } from 'redux-persist/constants'

const initialState = {
  byId: []
}

export default function spaceships (state=initialState, action) {
  switch (action.type) {
    case 'LIST_SPACESHIPS':
      return {
        ...state,
        byId: action.results
      };

    default:
      return state
  }
}
