import React, { useContext, useEffect } from 'react';
import {
  Header,
  ProfileIcon,
  MenuBottom,
  SearchIcon,
  SearchBar,
  MainContent,
} from '../components';
import Card from '../components/Card';
import { RecipesContext } from '../context/RecipesContext';
import {
  fetchMealAreas,
  fetchMeals,
  fetchMealsByArea,
} from '../services/mealAPI';
import '../layouts/ExploreByArea.css';

const Places = () => {
  const { areas, setSelectedArea } = useContext(RecipesContext);
  return (
    <select
      name="area"
      className="areas-list"
      data-testid="explore-by-area-dropdown"
      onChange={(e) => setSelectedArea(e.target.value)}
    >
      {areas.map((area) => (
        <option
          key={area}
          data-testid={`${area}-option`}
          value={area === 'all' ? '' : area}
        >
          {area}
        </option>
      ))}
    </select>
  );
};

const ExploreByArea = () => {
  const headerIngredients = {
    left: <ProfileIcon />,
    right: <SearchIcon />,
    center: 'Explorar Origem',
  };
  const {
    setAreas,
    showSearchBar,
    selectedArea,
    fetchKyleMenu,
    fillContext,
  } = useContext(RecipesContext);
  useEffect(() => {
    fetchMealAreas().then(({ meals }) =>
      fillContext([...meals.map(({ strArea }) => strArea)], setAreas),
    );
    const apiCall = selectedArea === '' ? fetchMeals : fetchMealsByArea;
    fetchKyleMenu(apiCall, 'comidas', selectedArea);
  }, []);
  useEffect(() => {
    const apiCall = selectedArea === '' ? fetchMeals : fetchMealsByArea;
    fetchKyleMenu(apiCall, 'comidas', selectedArea);
  }, [selectedArea]);

  return (
    <Card>
      <Header {...headerIngredients} />
      {showSearchBar && <SearchBar />}
      <Places />
      <MainContent />
      <MenuBottom />
    </Card>
  );
};

export default ExploreByArea;
