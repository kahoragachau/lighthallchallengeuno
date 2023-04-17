import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(parseInt(localStorage.getItem("count")))
  
  console.log(parseInt(count))

  const handleClick = () => {
    setCount(count + 1)
  }
// Watch for changes using the useEffect hook and set the localstorage key:value with the current 
  useEffect(()=>{
    localStorage.setItem("count", count)
  },[count])
  
  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {(count)}
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
