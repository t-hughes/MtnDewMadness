import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import * as reducers from './reducers'
import devTools from 'remote-redux-devtools'

function configureStore(onComplete: ?() => void) {
  const appReducer = combineReducers(reducers)

  const rootReducer = (state, action) => {
    return appReducer(state, action)
  }

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      autoRehydrate(),
      devTools({name: 'mtndew'})
    )
  )

  persistStore(store, {storage: AsyncStorage}, onComplete);

  return store;
}

export default configureStore;
