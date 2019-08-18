import { STATELOGIN, FALSELOGIN} from '../actionType/login'
const defaultState = {
    statu:false,
    inputValue:'',
    list:[],
    historyList:[]
}


export default (state = defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case STATELOGIN:
            newState.statu = true
            break;
        case FALSELOGIN:
            newState.statu = false
            break;
         case 'ChangeInputValue':
            newState.inputValue = action.value
            newState.list.push(newState.inputValue)
            break;
        case 'pushSearchList':
            newState.list = action.list
            break;
        // 添加到历史记录
        case 'pushHistoryList':
            // console.log(action.index)
            const item = newState.list.find((item, index) => {
                if (index === action.index) {
                    return item
                }
            })
            newState.historyList.push(item)
            newState.inputValue = ''
            // console.log(newState)
            break;
        // 清空历史记录
        case 'ClearhistoryList':
            console.log(newState.historyList)
            newState.historyList = []
            break;
        // 删除单条历史记录
        case 'delehistoryItem':
            newState.historyList.splice(action.index, 1)
            break;
        default:
            break;
    }
    return newState
}