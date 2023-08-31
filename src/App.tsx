//import { useState } from 'react'
import './App.css'
import { StopList } from './components/StopList'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
      <h1>BusBoard in React</h1>
      <StopList latitude={51.582478} longitude={-0.339949} />
    </>
  )
}

export default App
