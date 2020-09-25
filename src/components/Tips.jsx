import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RecipesContext } from '../context/RecipesContext';

const Tips = () => {
  const { fetchMenu, recipesRoster, loadingTips, typeRecipe } = useContext(RecipesContext);

  useEffect(() => {
    const url = window.location.href.split('/');
    const urlType = url.reverse()[1];
    // const urlId = url[0];
    const typeTip = urlType === 'comidas' ? ['cocktail', 'drinks'] : ['meal', 'meals'];
    const urlTail = 'search.php?s=';
    fetchMenu(typeTip, urlTail);
  }, []);

  const kind =
    typeRecipe === 'comidas'
      ? ['strDrink', 'strDrinkThumb', 'strAlcoholic']
      : ['strMeal', 'strMealThumb', 'strCategory'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return loadingTips ? (
    <p>Loading...</p>
  ) : (
    <Slider {...settings}>
      {recipesRoster.map((tip, index) => (
        <figure key={tip} style={{ overflow: 'auto', display: 'flex' }}>
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
      ))}
    </Slider>
  );
};

export default Tips;
