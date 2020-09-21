import React, { useState, useEffect } from 'react';
import { BtnCard, Header, ProfileIcon, Card, Finished } from '../components';
import '../layouts/FilterList.css';

const headerFavoriteRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Favoritas',
  right: false,
  id: 'page-title',
};

const logoutProps = {
  direction: '/',
  value: 'Sair',
  id: 'logout-btn',
  action: false,
};

const FilterButtons = () => (
  <div>
    <button data-testid="filter-by-all-btn" className={'button-category-filter'}>
      {' '}
      All
    </button>
    <button data-testid="filter-by-food-btn" className={'button-category-filter'}>
      Foods
    </button>
    <button data-testid="filter-by-drink-btn" className={'button-category-filter'}>
      Drinks
    </button>
  </div>
);

const FavoritesRecipes = () => {
  const [hasChosen, setHasChosen] = useState(JSON.parse(localStorage.getItem('favoriteRecipes')));
  // const isInitialMount = useRef(true);
  useEffect(() => {
    // if (isInitialMount.current) { // https://bit.ly/3ckpXoY
    //   isInitialMount.current = false;
    // } else setHasChosen(JSON.parse(localStorage.getItem('favoriteRecipes')));
    if (!hasChosen) setHasChosen(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [hasChosen]);

  // const hasChosen = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <Card>
      {!hasChosen && localStorage.setItem('favoriteRecipes', JSON.stringify([]))}
      <Header {...headerFavoriteRecipes} />
      {hasChosen && <FilterButtons />}
      {hasChosen && <Finished keyStorage={'favoriteRecipes'} />}
      <BtnCard {...logoutProps} />
    </Card>
  );
};

export default FavoritesRecipes;
