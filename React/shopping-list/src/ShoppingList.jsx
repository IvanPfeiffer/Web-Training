import { useState } from "react";
// import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), productName: "Banana", qty: 2 },
  ]);

  const addItem = (item) => {
    setItems((currentItems) => {
      return [...currentItems, { ...item, id: uuid() }];
    });
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.productName} - {item.qty}
            </li>
          );
        })}
      </ul>
      <ValidatedShoppingListForm addItem={addItem} />
    </div>
  );
}
