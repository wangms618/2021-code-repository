import { Globalstyle } from './style.js'
import Header from './common/header'
import { GlobalIconstyle } from './statics/iconfont/iconfont.js'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import login from './pages/login'
function App() {
  return (
    <div className="test">
      <GlobalIconstyle></GlobalIconstyle>
      <Globalstyle></Globalstyle>
      <Provider store={store}>
        <BrowserRouter>
          {/* 声明路由 */}
          <Header></Header>
          {/* exact开启精准匹配 */}
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
          <Route path='/login' exact component={login}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
