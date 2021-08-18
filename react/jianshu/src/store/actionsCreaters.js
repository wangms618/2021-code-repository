import axios from 'axios';
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST
} from './actionTypes'
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/hot')
      .then((res) => {
        const data = res.data.movieList
        console.log(data);
        const action = initListAction(data)
        dispatch(action)
        // store.dispatch(action)
        // console.log(action);
      })
  }
}

export const getInitList = () => {
  type:GET_INIT_LIST
}