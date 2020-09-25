import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BtnCard, Header, ProfileIcon, Card, Finished, FilterButtons } from '../components';
import '../layouts/FilterList.css';

const headerFavoriteRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Favoritas',
  right: false,
  id: 'page-title',
};

// const logoutProps = {
//   direction: '/',
//   value: 'Sair',
//   id: 'logout-btn',
//   action: false,
// };

// const filterByType = (hasChosen, setHasChosen, allRecipes, typeMenu) => {
//   console.log(hasChosen, setHasChosen, typeMenu, allRecipes);
//   setHasChosen(
//     !typeMenu
//       ? Object.values(allRecipes)
//       : Object.values(allRecipes).filter((x) => x.type.includes(typeMenu)),
//   );
// };

// const FilterButtons = (props) => (
//   <div className="category-list">
//     <button
//       data-testid="filter-by-all-btn"
//       className={'button-category-filter'}
//       onClick={() => filterByType(props.hasChosen, props.setHasChosen, props.allRecipes)}
//     >
//       All
//     </button>
//     <button
//       data-testid="filter-by-food-btn"
//       className={'button-category-filter'}
//       onClick={() =>
// filterByType(props.hasChosen, props.setHasChosen, props.allRecipes, 'comida')}
//     >
//       Foods
//     </button>
//     <button
//       data-testid="filter-by-drink-btn"
//       className={'button-category-filter'}
//       onClick={() =>
// filterByType(props.hasChosen, props.setHasChosen, props.allRecipes, 'bebida')}
//     >
//       Drinks
//     </button>
//   </div>
// );

const FavoritesRecipes = () => {
  const allRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [hasChosen, setHasChosen] = useState(JSON.parse(localStorage.getItem('favoriteRecipes')));

  return (
    <Card>
      {/* {!hasChosen && localStorage.setItem('favoriteRecipes', JSON.stringify(mockFavorites))} */}
      <Header {...headerFavoriteRecipes} />
      {hasChosen && (
        <FilterButtons allRecipes={allRecipes} hasChosen={hasChosen} setHasChosen={setHasChosen} />
      )}
      <Finished listRecipes={hasChosen} />
      {/* <BtnCard {...logoutProps} /> */}
    </Card>
  );
};

export default FavoritesRecipes;

FavoritesRecipes.propTypes = {
  allRecipes: PropTypes.node.isRequired,
  hasChosen: PropTypes.node.isRequired,
  setHasChosen: PropTypes.node.isRequired,
};
