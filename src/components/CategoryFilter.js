import React from "react";

function CategoryFilter({ setCategory, categories }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button key={category} onClick={() => setCategory(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
