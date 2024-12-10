import React, { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 1000 },
  { id: 2, name: "Shirt", category: "clothing", price: 50 },
  { id: 3, name: "Novel", category: "books", price: 20 },
];

function ProductPage() {
  const { productId } = useParams();
  const product = products.find((prod) => prod.id === parseInt(productId));
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="product-page">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
