import ShoppingItem from "./ShoppingItem"



export default function ShoppingList({items}){

    return (
        <>
        <ul>
            {items.map(item => <ShoppingItem key={item.id} {...item} /> )}
        </ul>
        </>
    )

}