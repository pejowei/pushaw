import { CONNECTED, DISCONNECTED } from 'pusher-redux';

export const connected = (state: boolean = false, action:any) => {
    switch(action.type){
        case CONNECTED:
            return true

        case DISCONNECTED:
            return false

        default:
            return state
    }
}