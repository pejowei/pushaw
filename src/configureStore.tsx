import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'

import loggerMiddleware from './middleware/logger'
import { rootReducer } from './_reducers'

export default function configureAppStore(preloadedState:any) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
  })

  return store
}