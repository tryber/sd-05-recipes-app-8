import React, { useContext, useEffect } from 'react';
import { BtnCard, Header, ProfileIcon, MenuBottom } from '../components';
import Card from '../components/Card';
import { RecipesContext } from '../context/RecipesContext';
import { fetchMealIngredients } from '../services/mealAPI';
import { fetchDrinkIngredients } from '../services/drinkAPI';
import parseRecipesData from '../helper/fitRecipesData';
import IngredientCard from '../components/IngredientCard';
// import { fetchDrinkIngredients } from '../services/drinkAPI';
import '../layouts/MainFoodContent.css';

const headerIngredients = {
  left: <ProfileIcon />,
  center: 'Explorar Ingredientes',
};
const logoutProps = {
  direction: '/',
  value: 'Sair',
};

const IngredientList = () => {
  const { ingredients } = useContext(RecipesContext);
  return (
    <div className="recipes-card-container">
      {ingredients.length >= 1 &&
        ingredients.slice(0, 12).map(({ strIngredient }, idx) => (
          <IngredientCard
            idx={idx.toString()}
            text={strIngredient}
            key={idx.toString()}
          />
        ))}
    </div>
  );
};

const ExploreByIngredients = () => {
  const { setIngredients } = useContext(RecipesContext);
  const url = window.location.pathname.split('/')[2];
  useEffect(() => {
    setIngredients([]);
    const apiCall =
      url === 'comidas' ? fetchMealIngredients : fetchDrinkIngredients;
    apiCall().then((response) =>
      setIngredients([...parseRecipesData(response)]),
    );
  }, []);

  return (
    <Card>
      <Header {...headerIngredients} />
      <IngredientList />
      <MenuBottom />
    </Card>
  );
};

export default ExploreByIngredients;
