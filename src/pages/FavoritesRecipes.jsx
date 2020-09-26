import React from 'react';
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

const mockFavorites = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  },
];

const FilterButtons = () => (
  <div>
    <button data-testid="filter-by-all-btn" className={'button-category-filter'}>
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
  const hasChosen = JSON.parse(localStorage.getItem('favoriteRecipes'));
  // const isInitialMount = useRef(true);
  // useEffect(() => {
  // console.log(hasChosen);
  // if (isInitialMount.current) { // https://bit.ly/3ckpXoY
  //   isInitialMount.current = false;
  // } else setHasChosen(JSON.parse(localStorage.getItem('favoriteRecipes')));
  //   if (!hasChosen) setHasChosen(JSON.parse(localStorage.getItem('favoriteRecipes')));
  // }, [hasChosen]);
  console.log(JSON.parse(localStorage.getItem('favoriteRecipes')));
  // const hasChosen = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(hasChosen);
  return (
    <Card>
      {!hasChosen && localStorage.setItem('favoriteRecipes', JSON.stringify(mockFavorites))}
      <Header {...headerFavoriteRecipes} />
      {hasChosen && <FilterButtons />}
      {hasChosen && <Finished keyStorage={'favoriteRecipes'} />}
      <BtnCard {...logoutProps} />
    </Card>
  );
};

export default FavoritesRecipes;
