import { STATELOGIN} from '../actionType/login'
const defaultState = {
 statu:false,
}


export default (state = defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case STATELOGIN:
            newState.statu = true
            console.log(newState)
            break;

        default:
            break;
    }
    return newState
}