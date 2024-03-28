import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'
import Counter from './components/Counter';
import NewComponent from './components/NewComponent';


const App = () => {

  /**
   * Dù biến count thay đổi nhưng Component không bị re-render dù có name
   * Có hai kỹ thuật chính để tránh render nhiều lần và không cần sử dụng memo
   * Cách 1 : để những thẻ div chứa state thay đổi vào một Component riềng biệt (Ví dụ Counter.jsx)
   * Cách 2 : Tạo 1 Component bọc bên ngoài
   */

  const [name, setName] = useState('David');

  const getUsers = useCallback(() => {
    return fetch('https://reqres.in/api/users')
  })

  return (
    <>
      {/* <p>outer count: {count}</p>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>

        <ChildComponent name={name} getUsers={getUsers}/>
      </div> */}
      <NewComponent>
          <ChildComponent name={name} getUsers={getUsers}/>
      </NewComponent>
    </>
  )
}

export default App
