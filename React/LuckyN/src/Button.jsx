import './Button.css';

export default function Button({ text='Click Me' ,handleOnClick}){
  return <button className='Button' onClick={handleOnClick}>{text}</button>
}