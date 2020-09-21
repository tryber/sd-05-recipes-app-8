import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ShareIcon } from '../components';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const Finished = (keyStorage) =>
  JSON.parse(localStorage.getItem(keyStorage.keyStorage)).map((x, index) => (
    <div>
      <Link to={`/${x.type}s/${x.id}`}>
        <img
          data-testid={`${index}-horizontal-image`}
          src={x.image}
          style={{ width: '50px' }}
          alt="horizontal-recipe"
        />
      </Link>
      <small data-testid={`${index}-horizontal-top-text`}>
        {x.type === 'comida' ? `${x.area} - ${x.category}` : x.alcoholicOrNot}
      </small>
      <Link to={`/${x.type}s/${x.id}`}>
        <b data-testid={`${index}-horizontal-name`}>{x.name}</b>
      </Link>
      <time data-testid={`${index}-horizontal-done-date`}>{x.doneDate}</time>
      <ShareIcon id={x.id} type={x.type} dataId={`${index}-horizontal-share-btn`} />
      <button data-testid={`${index}-horizontal-favorite-btn`}>
        <img src={blackHeartIcon} alt="favorite-btn" />
      </button>
      {/* <FavoriteClone /> */}
      {Object.prototype.hasOwnProperty.call(x, 'tags') ? (
        <div>
          <mark data-testid={`${index}-${x.tags[0]}-horizontal-tag`}>{x.tags[0]}</mark>
          <mark data-testid={`${index}-${x.tags[1]}-horizontal-tag`}>{x.tags[1]}</mark>
        </div>
      ) : (
        ''
      )}
    </div>
  ));

export default Finished;

Finished.propTypes = {
  hasOwnProperty: PropTypes.func.isRequired,
};
