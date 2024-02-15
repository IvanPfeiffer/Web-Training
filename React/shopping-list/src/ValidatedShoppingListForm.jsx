/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ productName: "", qty: "" });
  const [isProductValid, setIsProductValid] = useState(false);

  const validate = (product) => {
    if (product.length === 0) {
      setIsProductValid(false);
    } else {
      setIsProductValid(true);
    }
  };

  const handleChange = (evt) => {
    if (evt.target.name === "productName") {
      validate(evt.target.value);
    }

    setFormData((oldData) => {
      return { ...oldData, [evt.target.name]: evt.target.value };
    });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (isProductValid) {
      addItem(formData);
      setFormData({ productName: "", qty: "" });
    }
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
      {!isProductValid && (
        <p style={{ color: "red" }}>Product cannot be empty</p>
      )}
      <label htmlFor="qty">Quantity: </label>
      <input
        type="number"
        placeholder="Quantity"
        name="qty"
        id="qty"
        value={formData.qty}
        onChange={handleChange}
      />
      <button disabled={!isProductValid}>Add Item</button>
    </form>
  );
}
