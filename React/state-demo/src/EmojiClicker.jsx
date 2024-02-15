import { useState } from "react"
import {v4 as uuid} from 'uuid'

export default function EmojiClicker(){
  
const [emojis, setEmojis] = useState([{id: uuid(), emoji: '😀'}])

const addEmoji = () =>{
    setEmojis(oldEmojis => [...oldEmojis, {id: uuid(), emoji: '😀'}])

}

const deleteEmoji = (id) =>{
    setEmojis(previousEmojis => {
        return previousEmojis.filter(e => e.id !== id)
    })
    
} 

const changeEmojis = () =>{
  setEmojis(prevEmojis => prevEmojis.map(e => {
    return {
      ...e, emoji: "♥"
    }
  }))
}
  return (
  <div>
    {emojis.map(e => (
        <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{fontSize: '4rem'}}>{e.emoji}</span> //THe arrow function will prevent the inmmediate execution
    ))}
    <button onClick={addEmoji}>Add new emoji!</button>
    <button onClick={changeEmojis}>Make them all hearts</button>
  </div>
  )
}