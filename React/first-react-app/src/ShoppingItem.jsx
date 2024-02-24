export default function ShoppingItem({item, completed,qty}){

    return (
        <li style={{color: completed ? 'grey': 'red', textDecoration: completed ? 'line-through': 'none'}}>
                {item} -{qty}
                </li>
                )
    
}