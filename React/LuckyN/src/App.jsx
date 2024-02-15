
import './App.css'
// import LuckyN from './LuckyN'
// import { lessThan, allSum} from './utils'
// import Box from './Box'
import BoxGrid from './BoxGrid'
function App() {
  

  return (
    <>
      {/* <LuckyN numDice={2} goal={7} win={allSum} nameOfGame={'Lucky'}/>
      <LuckyN numDice={5} goal={17} win={lessThan} nameOfGame={'Less Than '}/> */}
      {/* <Box />
      <Box />
      <Box /> */}
      <BoxGrid numBoxes={12}/>
    </>
  )
}

export default App
