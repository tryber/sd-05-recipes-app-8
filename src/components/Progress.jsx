import React from 'react';

export default function Progress() {
  return (
    <div>
      <label htmlFor="progress" style={{ fontSize: '13px' }}>
        Evolução do Projeto
      </label>
      <meter id="progress" value="51" min="0" max="87">
        53 out of 87 requirements done
      </meter>
    </div>
  );
}
