import { useState } from "react";

export default function Counter(){

  const [count, setCount] = useState(0)
  const incrementNum = () => setCount(count + 1); 
  return (
  <div>
    <h1>Count is: {count}</h1>
    <button onClick={incrementNum}>Increase Count</button>
  </div>
  )
}