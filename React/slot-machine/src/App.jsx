import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slots from './Slots'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slots values={['😊', '👍', '💗']} />
      <Slots values={['😊', '👍', '💗']} />
      <Slots values={['😊', '👍', '💗']} />
    </>
  )
}

export default App
