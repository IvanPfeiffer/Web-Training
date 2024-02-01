
import './App.css'
import Chicken from './Chicken'
import ColorList from './ColorList'
import Die from './Die'
import DoubleDice from './DoubleDice'
import Greeter from './Greeter'
import ListPicker from './ListPicker'
import Heading from './Heading'

function App() {


  return (
    <>
    <Heading word='Olive Heading'/>
    <Heading color='red' word='Red Heading'/>
    <Greeter person='Bill' from="Me"/>
    <Chicken />
    <Die numSides={20}/>
    <Die/>
    <Die numSides={10}/>
    <ListPicker values={[1, 2, 3]}/>
    <DoubleDice />
    <DoubleDice />
    <ColorList list={['red', 'pink', 'purple', 'teal']}/>
    </>
  )
}

export default App
