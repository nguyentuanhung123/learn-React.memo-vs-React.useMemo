import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'

const App = () => {

  /**
   * Dù biến count thay đổi nhưng Component không bị re-render dù có name
   */

  const [count, setCount] = useState(0);
  const [name, setName] = useState('David');

  const getUsers = useCallback(() => {
    return fetch('https://reqres.in/api/users')
  })

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <ChildComponent name={name} getUsers={getUsers}/>
    </>
  )
}

export default App
