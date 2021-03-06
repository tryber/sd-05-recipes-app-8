import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const ShareIcon = ({ id, type, dataId }) => {
  const [share, setShare] = useState('');
  return (
    <figure>
      <button
        data-testid={dataId}
        src={shareIcon}
        onClick={() => {
          copy(`${window.location.origin}/${type}/${id}`);
          setShare('Link copiado!');
        }}
      >
        <img src={shareIcon} alt="shareIcon" />
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
