import React from 'react';

export default function Progress() {
  return (
    <div>
      <label htmlFor="progress" style={{ fontSize: '13px' }}>
        Evolução do Projeto
      </label>
      <meter id="progress" value="38" min="0" max="87">
        38 out of 87 requirements done
      </meter>
    </div>
  );
}
