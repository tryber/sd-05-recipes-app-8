import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import '../layouts/FilterList.css';

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
            const filter = name.replace(' ', '_');
            setCategories((current) => ({
              ...current,
              choose: (current.choose === filter ) ? 'All' : filter,
            }));
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
