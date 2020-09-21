import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const ShareIcon = ({ id, type, dataId }) => {
  const [share, setShare] = useState('');
  return (
    <figure>
      <button>
        <img
          data-testid={dataId}
          src={shareIcon}
          alt="shareIcon"
          onClick={() => {
            copy(`${window.location.origin}/${type}s/${id}`);
            setShare('Link copiado!');
          }}
        />
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
