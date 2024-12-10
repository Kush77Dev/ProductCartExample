import React from "react";
import { Link } from "react-router-dom";

const categories = ["Electronics", "Clothing", "Books"];

function Home() {
  return (
    <div className="home">
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
