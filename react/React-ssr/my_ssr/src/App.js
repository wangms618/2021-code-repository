import React from 'react'
import { renderRoutes } from 'react-router-config'
const App = (props) => {
  return (
    <div>
      {renderRoutes(props.route.routes)}
    </div>
  )
}
export default App