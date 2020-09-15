import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import './FilterList.css';

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
              choose: name.replace(' ', '_'),
            }));
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
