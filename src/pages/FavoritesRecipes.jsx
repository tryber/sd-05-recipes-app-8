import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BtnCard,
  Header,
  ProfileIcon,
  Card,
  ShareIcon,
  FavoriteIcon,
  FavoriteClone,
} from '../components';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const headerFavoriteRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Favoritas',
  id: 'page-title',
};

const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const FilterButtons = () => (
  <div>
    <button data-testid="filter-by-all-btn"> All</button>
    <button data-testid="filter-by-food-btn">Foods</button>
    <button data-testid="filter-by-drink-btn">Drinks</button>
  </div>
);

const Finished = (favRecipe) =>
  JSON.parse(localStorage.getItem('favoriteRecipes')).map((x, index) => (
    <div>
      <Link to={`/${x.type}s/${x.id}`}>
        <img
          data-testid={`${index}-horizontal-image`}
          src={x.image}
          style={{ width: '50px' }}
          alt="horizontal-recipe"
        />
      </Link>
      <small data-testid={`${index}-horizontal-top-text`}>
        {x.type === 'comida' ? `${x.area} - ${x.category}` : x.alcoholicOrNot}
      </small>
      <Link to={`/${x.type}s/${x.id}`}>
        <b data-testid={`${index}-horizontal-name`}>{x.name}</b>
      </Link>
      <time data-testid={`${index}-horizontal-done-date`}>{x.doneDate}</time>
      <ShareIcon id={x.id} type={x.type} dataId={`${index}-horizontal-share-btn`} />
      <img src={blackHeartIcon} data-testid={`${index}-horizontal-favorite-btn`} />
      {/* <mark data-testid={`${index}-${x.tags[0]}-horizontal-tag`}>{x.tags[0]}</mark> */}
      {/* <mark data-testid={`${index}-${x.tags[1]}-horizontal-tag`}>{x.tags[1]}</mark> */}
    </div>
  ));

const FavoritesRecipes = () => {
  const mockRecipes = [
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

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(mockRecipes));
  }, [mockRecipes]);

  // Object.values(JSON.parse(localStorage.getItem('favoriteRecipes'))).length === 0 ? (
  //  !JSON.parse(localStorage.getItem('favoriteRecipes')) ? (
  //   <strong>Loading...</strong>
  // ) :
  return (
    <Card>
      <Header {...headerFavoriteRecipes} />
      <FilterButtons />
      <Finished favRecipe={mockRecipes} />
      <BtnCard {...logoutProps} />
    </Card>
  );
};

export default FavoritesRecipes;
