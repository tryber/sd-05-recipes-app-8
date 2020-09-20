import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

const ShareIcon = (recipe, keys) => {
  const [share, setShare] = useState('');
  return (
    <figure>
      <button
        onClick={() => {
          console.log(window.location.href);
          navigator.clipboard.writeText(window.location.href);
          setShare('Link Copiado!');
        }}
      >
        <img data-testid="share-btn" src={shareIcon} alt="shareIcon" />
      </button>
      {share}
    </figure>
  );
};

export default ShareIcon;
