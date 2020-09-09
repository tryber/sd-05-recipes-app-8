import React from 'react';
import { Link } from 'react-router-dom';


const BtnLogin = () => {
  const checkLogin = () => {    
    return false;
  }
  
  return (
    <Link to="/comidas">
      <button data-testid="login-submit-btn" type="button" disabled={checkLogin()}>
        Entrar
      </button>
    </Link>
  );
};

export default BtnLogin;
