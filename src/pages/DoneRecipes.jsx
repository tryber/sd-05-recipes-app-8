import React, { useState } from 'react';
import { BtnCard, Header, ProfileIcon, Card, Finished, FilterButtons } from '../components';

const headerDoneRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Feitas',
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

const DoneRecipes = () => {
  const allRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [hasChosen, setHasChosen] = useState(JSON.parse(localStorage.getItem('doneRecipes')));
  return (
    <Card>
      {!hasChosen && localStorage.setItem('doneRecipes', JSON.stringify([]))}
      <Header {...headerDoneRecipes} />
      {/* {hasDone && <FilterButtons />} */}
      {/* {hasDone && <Finished keyStorage={'doneRecipes'} />} */}
      <FilterButtons allRecipes={allRecipes} hasChosen={hasChosen} setHasChosen={setHasChosen} />
      {hasChosen && <Finished listRecipes={hasChosen} />}
      {/* <BtnCard {...logoutProps} /> */}
    </Card>
  );
};

export default DoneRecipes;
