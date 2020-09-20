import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const ShareIcon = ({ id, type, dataId }) => {
  const [share, setShare] = useState('');
  return (
    <figure>
      <button
        onClick={() => {
          // navigator.clipboard.writeText(window.location.href);
          // console.log(window.location.origin, keys[5], recipe[keys[1]][0][keys[4]], dataId);
          copy(`${window.location.origin}/${type}s/${id}`);
          setShare('Link copiado!');
        }}
      >
        <img data-testid={dataId} src={shareIcon} alt="shareIcon" />
      </button>
      {share}
    </figure>
  );
};

export default ShareIcon;

ShareIcon.propTypes = {
  dataId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
