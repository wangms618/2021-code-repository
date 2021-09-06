import React, { useState } from 'react';
function App() {
  const [name, setName] = useState('虾米')
  const [age, setSAge] = useState(20)
  const [sex, setSex] = useState('男')
  return (
    <div>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>性别：{sex}</p>
    </div>
  )
}
export default App