import React from 'react';

const InputPassword = () => {
  return (
    <form>
      <label htmlFor="password-input">
        <input data-testid="password-input" type="password" placeholder="Senha" />
      </label>
    </form>
  );
};

export default InputPassword;
