/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ productName: "", qty: "" });

  const handleChange = (evt) => {
    setFormData((oldData) => {
      return { ...oldData, [evt.target.name]: evt.target.value };
    });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({ productName: "", qty: "" });
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="product">Product Name:</label>
      <input
        type="text"
        placeholder="Product Name"
        name="productName"
        id="product"
        value={formData.productName}
        onChange={handleChange}
      />
      <label htmlFor="qty">Quantity: </label>
      <input
        type="number"
        placeholder="Quantity"
        name="qty"
        id="qty"
        value={formData.qty}
        onChange={handleChange}
      />
      <button>Add Item</button>
    </form>
  );
}
