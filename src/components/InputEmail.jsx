import React from 'react';

const InputEmail = () => {
  return (
    <form>
      <label htmlFor="email-input">
        <input data-testid="email-input" type="email" placeholder="Email" />
      </label>
    </form>
  );
};

export default InputEmail;
