const defaultState = {
  inputValue: '',
  list: [1, 2, 3, 4]
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'submit_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.value)
    return newState
  }
  return state
}