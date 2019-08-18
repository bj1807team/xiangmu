import { STATELOGIN, FALSELOGIN} from '../actionType/login'

export const stateLoginAction =()=>({
    type: STATELOGIN
})

export const falseLoginAction = () => ({
    type: FALSELOGIN
})
