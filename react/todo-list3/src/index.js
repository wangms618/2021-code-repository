import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store';
const App = (() => {
  return (
    <Provider store={store}>
      <TodoList />
      {/* 里面的组件能共享store */}
    </Provider>
  )
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
