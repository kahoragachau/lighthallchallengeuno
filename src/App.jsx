import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(parseInt(localStorage.getItem("count") || 0))
  
  console.log(parseInt(count))

  const handleClick = () => {
    setCount(count + 1)
  }
// Watch for changes using the useEffect hook and set the localstorage key:value with the current 
  useEffect(()=>{
    localStorage.setItem("count", count)
  },[count])
  

  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {(count)}
        </button>
      </div>
    </div>
  )
}

export default App
