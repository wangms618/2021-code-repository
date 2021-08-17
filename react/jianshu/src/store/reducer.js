// 管理store里的数据
const defaultState = {
  inputValue: '123',
  list:[1,2,3]
}
// reducer 可以接受state ，但是不能修改state
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    // state.inputValue
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
    console.log(state,action);
    }
  return state
}

