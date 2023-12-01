import { useState } from 'react'
import './App.css'
import {Todolist} from "./Todolist.tsx";
import {Counter} from "./Counter.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Todolist/>
      <Counter/>
    </>
  )
}

export default App
