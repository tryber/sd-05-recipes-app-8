import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';

const InputPassword = () => {
  const { setPassword } = useContext(RecipesContext);
  const handlingPassword = (value) => {
    setPassword(value);
  };
  return (
    <form>
      <label htmlFor="password-input">
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
          onChange={(e) => handlingPassword(e.target.value)}
        />
      </label>
    </form>
  );
};

export default InputPassword;
