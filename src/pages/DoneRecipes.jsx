import React, { useState } from 'react';
import { Header, ProfileIcon, Card, Finished, FilterButtons } from '../components';

const headerDoneRecipes = {
  left: <ProfileIcon />,
  center: 'Receitas Feitas',
  right: false,
  id: 'page-title',
};

const DoneRecipes = () => {
  const allRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [hasChosen, setHasChosen] = useState(JSON.parse(localStorage.getItem('doneRecipes')));
  return (
    <Card>
      {!hasChosen && localStorage.setItem('doneRecipes', JSON.stringify([]))}
      <Header {...headerDoneRecipes} />
      <FilterButtons allRecipes={allRecipes} hasChosen={hasChosen} setHasChosen={setHasChosen} />
      {hasChosen && <Finished listRecipes={hasChosen} />}
    </Card>
  );
};

export default DoneRecipes;
