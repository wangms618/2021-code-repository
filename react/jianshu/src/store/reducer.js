import { combineReducers } from 'redux'
import { reducer as headerReducer} from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as loginReducer} from '../pages/login/store'
// 运行集成所有reducer
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  login: loginReducer
})
export default reducer
 
