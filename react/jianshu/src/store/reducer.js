import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM } from './actionTypes' 
// 管理store里的数据
const defaultState = {
  inputValue: '',
  list:[]
}
// reducer 可以接受state ，但是不能修改state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    // state.inputValue
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
    // console.log(state,action);
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  return state
}

