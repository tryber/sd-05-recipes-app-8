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
// import { drinkFilterFL } from '../services/getRecipeDetails';

const CardThumb = (props) => {
  const { x, index } = props;
  return (
    <Link to={`/${x.type}s/${x.id}`}>
      <img
        data-testid={`${index}-horizontal-image`}
        src={x.image}
        style={{ width: '150px' }}
        alt="horizontal-recipe"
      />
    </Link>
  );
};

const TopText = (props) => {
  const { x, index } = props;
  return (
    <Link to={`/${x.type}s/${x.id}`}>
      <b data-testid={`${index}-horizontal-name`}>{x.name}</b>
    </Link>
  );
};

const HeartButton = (props) => {
  const { x, index } = props;
  const allRecipes = getLocalStorage(favorite);
  return (
    <button
      onClick={() => {
        saveLocalStorage(
          favorite,
          allRecipes.filter((item) => item.id !== x.id),
        );
        window.location.reload();
      }}
    >
      <img
        data-testid={`${index}-horizontal-favorite-btn`}
        src={blackHeartIcon}
        alt="provisory"
      />
    </button>
  );
};

const HorizontalTopText = (props) => {
  const { x, index } = props;
  return (
    <small data-testid={`${index}-horizontal-top-text`}>
      {x.type === 'comida' ? `${x.area} - ${x.category}` : x.alcoholicOrNot}
    </small>
  );
};

const DoneDate = (props) => {
  const { x, index } = props;
  return (
    <time data-testid={`${index}-horizontal-done-date`}>{x.doneDate}</time>
  );
};

const Finished = () => {
  const allRecipes = getLocalStorage(favorite);
  const { filterFavorites } = useContext(RecipesContext);
  useEffect(() => {}, [filterFavorites]);
  let filteredRecipes = allRecipes;

  if (filterFavorites) {
    filteredRecipes = allRecipes.filter(
      (item) => item.type === filterFavorites,
    );
  }

  return (
    <div style={{ marginTop: '70px' }}>
      {filteredRecipes.map((x, index) => (
        <div key={x.id}>
          <CardThumb x={x} index={index} />
          <HorizontalTopText x={x} index={index} />
          <TopText x={x} index={index} />
          <DoneDate x={x} index={index} />
          <ShareIcon
            id={x.id}
            type={`${x.type}s`}
            dataId={`${index}-horizontal-share-btn`}
          />
          <HeartButton x={x} index={index} />
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

CardThumb.propTypes = {
  x: PropTypes.shape({
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

TopText.propTypes = {
  x: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

HorizontalTopText.propTypes = {
  x: PropTypes.shape({
    type: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

DoneDate.propTypes = {
  x: PropTypes.shape({
    doneDate: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
