import {
  fromJS
} from 'immutable'

const defaultState = fromJS({
  articleList: []
})

export default (state = defaultState, action) => {
  if (action.type === 'change_home_data') {
    return state.set('articleList', action.articleList)
  }
  if (action.type === 'add_home_data') {
    return state.merge({
      'articleList':state.get('articleList').concat(action.articleList)
      // 'articleList', action.articleList
    })
  }
  return state
}