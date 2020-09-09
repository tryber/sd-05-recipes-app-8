import React from 'react';

const InputEmail = () => (
  <form>
    <label htmlFor="email-input">
      <input data-testid="email-input" type="email" placeholder="Email" />
    </label>
  </form>
);

export default InputEmail;
