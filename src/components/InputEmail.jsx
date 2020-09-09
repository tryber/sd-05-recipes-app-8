import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';

const InputEmail = () => {
  const { setEmail } = useContext(RecipesContext);
  const handlingMail = (value) => setEmail(value);
  return (
    <form>
      <label htmlFor="email-input">
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          onChange={(e) => handlingMail(e.target.value)}
        />
      </label>
    </form>
  );
};

export default InputEmail;
