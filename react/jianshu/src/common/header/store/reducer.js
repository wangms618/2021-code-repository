import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
  focused: false
})


// immutable对象的set方法会结合之前immutable对象的值设置
export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focused',true)
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused',false)
  }
  return state
}