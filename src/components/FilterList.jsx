import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';

export default function FilterList() {
  const { categories, setCategories } = useContext(RecipesContext);
  return (
    <div className="category-list">
      {categories.catList.map((category) => (
        <button
          key={category}
          name={category}
          className={`${category}-category-filter`}
          data-testid={`${category}-category-filter`}
          onClick={({ target: { name } }) => {
            setCategories((current) => ({
              ...current,
              choose: name,
            }));
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
