import React from "react";
import { Link, useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 1000 },
  { id: 2, name: "Shirt", category: "clothing", price: 50 },
  { id: 3, name: "Novel", category: "books", price: 20 },
];

function CategoryPage() {
  const { categoryId } = useParams();
  const filteredProducts = products.filter(
    (product) => product.category === categoryId
  );

  return (
    <div className="category-page">
      <h2>{categoryId.toUpperCase()}</h2>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
