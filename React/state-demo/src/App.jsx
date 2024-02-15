
import './App.css'

// import EmojiClicker from './EmojiClicker'
import ScoreKeeperMulti from './ScoreKeeperMulti'


function App() {
  

  return (
    <>
      {/* <h1>State Demo</h1> */}
      <h1>Score Keeper Demo</h1>
      {/* <Counter />
      <Dumbo />
      <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      <ScoreKeeperMulti numPlayers={4} target={5}/>
    </>
  )
}

export default App
