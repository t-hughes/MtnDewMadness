import { REHYDRATE } from 'redux-persist/constants'

const initialState = {
  byId: []
}

export default function films (state=initialState, action) {
  switch (action.type) {
    case 'LIST_FILMS':
      return {
        ...state,
        byId: action.results
      };

    default:
      return state
  }
}
