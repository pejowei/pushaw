import { 
    DECREMENT_COUNTER,
    INCREMENT_COUNTER,
} from '../_actions/constants'

export const count = (state: number = 0, action:any) => {
    switch(action.type){
        case DECREMENT_COUNTER:
            return state - 1
        
        case INCREMENT_COUNTER:
            return state + 1
        
        default:
            return state
    }
}