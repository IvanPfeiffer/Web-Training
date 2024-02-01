export default function ColorList({list}){
    
    
    return (
        <div>
            <p>Color list:</p>
            <p>{list}</p>
            <ul>
                {list.map(color => <li style={{color: color}}>{color}</li>)}
            </ul>
        </div>
    )
}