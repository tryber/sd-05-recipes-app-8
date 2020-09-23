import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import Slider from 'react-slick';
// import { RecipesContext } from '../context/RecipesContext';

const Tips = (props) => {
  // const { fetchMenu, recipesRoster } = useContext(RecipesContext);

  // useEffect(() => {
  //   const url = window.location.href.split('/');
  //   const urlType = url.reverse()[1];
  //   const urlId = url[0];
  //   const urlTail = 'search.php?s=';
  //   fetchMenu(urlType, urlTail);
  // }, []);

  // console.log(props.recipesRoster, recipesRoster);

  const kind =
    Object.keys(props.recipesRoster[0])[0] === 'idMeal'
      ? ['strMeal', 'strMealThumb', 'strCategory']
      : ['strDrink', 'strDrinkThumb', 'strAlcoholic'];
  return (
    // <Slider {...settings}>{<img src={menu[kind[1]]} />}</Slider>
    props.recipesRoster.map((tip, index) => (
      <figure key={tip}>
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
