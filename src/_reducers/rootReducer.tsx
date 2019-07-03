import { combineReducers } from 'redux'

import { connected } from './connected'
import { count } from './count'
import { messages } from './messages'

export const rootReducer = combineReducers({
    connected,
    count,
    messages,
}) 