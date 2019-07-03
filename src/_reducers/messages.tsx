import { NEW_MESSAGE } from '../_actions/constants'

export const messages = (state: any[] = [], action:any) => {
    switch(action.type){
        case NEW_MESSAGE:
            return [...state, {channel:action.channel, event:action.event, data: action.data}]
        
        default:
            return state
    }
}