import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/RecipesContext';

const BtnLogin = () => {
  const { email, password } = useContext(RecipesContext);
  const checkPassword = (keyword) => !(keyword.length < 6);
  const checkEmail = (mail) => mail.match(/\S+@\S+\.\S+/);
  return (
    <Link to="/comidas">
      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={!(checkPassword(password) && checkEmail(email))}
      >
        Entrar
      </button>
    </Link>
  );
};

export default BtnLogin;
