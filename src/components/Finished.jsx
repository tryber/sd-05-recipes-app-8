import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ShareIcon } from '../components';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  favorite,
  getLocalStorage,
  saveLocalStorage,
} from '../helper/LocalStorageHandler';
import { RecipesContext } from '../context/RecipesContext';
import { drinkFilterFL } from '../services/getRecipeDetails';

const Finished = (props) => {
  console.log(props);
  const allRecipes = getLocalStorage(favorite);
  const { filterFavorites } = useContext(RecipesContext);
  useEffect(() => {}, [filterFavorites]);
  console.log('all', allRecipes);
  let filteredRecipes = allRecipes;

  if (filterFavorites) {
    filteredRecipes = allRecipes.filter(
      (item) => item.type === filterFavorites,
    );
  }

  // return (<div></div>);
  return (
    <div style={{ marginTop: '70px' }}>
      {filteredRecipes.map((x, index) => (
        <div key={x.id}>
          <Link to={`/${x.type}s/${x.id}`}>
            <img
              data-testid={`${index}-horizontal-image`}
              src={x.image}
              style={{ width: '150px' }}
              alt="horizontal-recipe"
            />
          </Link>
          <small data-testid={`${index}-horizontal-top-text`}>
            {x.type === 'comida'
              ? `${x.area} - ${x.category}`
              : x.alcoholicOrNot}
          </small>
          <Link to={`/${x.type}s/${x.id}`}>
            <b data-testid={`${index}-horizontal-name`}>{x.name}</b>
          </Link>
          <time data-testid={`${index}-horizontal-done-date`}>
            {x.doneDate}
          </time>
          <ShareIcon
            id={x.id}
            type={`${x.type}s`}
            dataId={`${index}-horizontal-share-btn`}
          />
          <button onClick={() => {
            saveLocalStorage(favorite, allRecipes.filter((item) => item.id !== x.id));
            window.location.reload();
          }}>
            <img
              data-testid={`${index}-horizontal-favorite-btn`}
              src={blackHeartIcon}
              alt="provisory"
            />
          </button>
          {/* <FavoriteClone dataId={`${index}-horizontal-favorite-btn`} /> */}
          {Object.prototype.hasOwnProperty.call(x, 'tags') ? (
            <div>
              <mark data-testid={`${index}-${x.tags[0]}-horizontal-tag`}>
                {x.tags[0]}
              </mark>
              <mark data-testid={`${index}-${x.tags[1]}-horizontal-tag`}>
                {x.tags[1]}
              </mark>
            </div>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

export default Finished;

Finished.propTypes = {
  // hasOwnProperty: PropTypes.func.isRequired,
  listRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
