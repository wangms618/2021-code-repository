import { combineReducers } from 'redux'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store'
// 运行集成所有reducer
const reducer = combineReducers({
  header: headerReducer,
  home:homeReducer
})
export default reducer
 
