import { Globalstyle } from './style.js'
import { Header } from './common/header'
import {GlobalIconstyle} from './statics/iconfont/iconfont.js'
function App() {
  return (
    <div className="test">
      <GlobalIconstyle></GlobalIconstyle>
      <Globalstyle></Globalstyle>
      <Header></Header>
    </div>
  );
}

export default App;
