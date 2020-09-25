// import React from 'react';
import React, { useContext, useEffect } from 'react';
// import Slider from 'react-slick';
import { RecipesContext } from '../context/RecipesContext';

const Tips = () => {
  const { fetchMenu, recipesRoster, loadingTips, typeRecipe } = useContext(RecipesContext);

  useEffect(() => {
    const url = window.location.href.split('/');
    const urlType = url.reverse()[1];
    const urlId = url[0];
    const typeTip = urlType === 'comidas' ? ['cocktail', 'drinks'] : ['meal', 'meals'];
    const urlTail = 'search.php?s=';
    console.log(urlType, typeTip, urlId, urlTail);
    fetchMenu(typeTip, urlTail);
  }, []);

  const kind =
    typeRecipe === 'comidas'
      ? ['strDrink', 'strDrinkThumb', 'strAlcoholic']
      : ['strMeal', 'strMealThumb', 'strCategory'];

  return loadingTips ? (
    <p>Loading...</p>
  ) : (
    // <Slider {...settings}>{<img src={menu[kind[1]]} />}</Slider>
    recipesRoster.map((tip, index) => (
      <figure key={tip} style={{ overflow: 'auto', display: 'flex' }}>
        {console.log(recipesRoster)}
        <img
          data-testid={`${index}-recomendation-card`}
          src={tip[kind[1]]}
          alt={`${index}-recomendation-card`}
          style={{ maxHeight: '80px' }}
        />
        <figcaption>
          <small>{tip[kind[2]]}</small>
          <span data-testid={`${index}-recomendation-title`}>{tip[kind[0]]}</span>
        </figcaption>
      </figure>
    ))
  );
};

export default Tips;
