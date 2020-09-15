import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';

test('verificando URL página login', () => {
  const { getByText } = render(<MemoryRouter><App /></MemoryRouter>)
  const history = createMemoryHistory();
  history.push('/');
  expect(history.location.pathname).toBe('/');
  expect(getByText(/Login/i)).toBeInTheDocument();
});

describe('testando funcionalidades input e local storage', () => {
  test('deve ser possível digitar um email válido e uma senha maior que 6 caracteres', () => {
    const { getByTestId } = render(<MemoryRouter><App /></MemoryRouter>)
    const email = getByTestId("email-input");
    const password = getByTestId("password-input");
    const button = getByTestId("login-submit-btn");
    fireEvent.change(email, { target: { value: 'teste@teste.com' } })
    expect(email.value).toBe('teste@teste.com');
    fireEvent.change(password, { target: { value: '123456' } });
    expect(password.value).toBe('123456');
    expect(button).toBeDisabled();
    fireEvent.change(password, { target: { value: '12345678' } });
    expect(password.value).toBe('12345678');
    expect(button).toBeEnabled();
  });
  test('após a submissão 2 tokens devem ser salvos no localstorage e o usuario deve ser redirecionaod para pagina de receitas de comidas', () => {
    const { getByTestId } = render(<MemoryRouter><App /></MemoryRouter>)
    const email = getByTestId("email-input");
    const password = getByTestId("password-input");
    const button = getByTestId("login-submit-btn");
    fireEvent.change(email, { target: { value: 'testing@testing.com' } })
    expect(email.value).toBe('testing@testing.com');
    fireEvent.change(password, { target: { value: '12345678' } });
    expect(password.value).toBe('12345678');
    fireEvent.click(button);
    expect(location.pathname).toBe('/comidas')
    expect(window.localStorage.getItem('mealsToken')).toBe('1')
    expect(window.localStorage.getItem('cocktailsToken')).toBe('1')
    expect(window.localStorage.getItem('user')).toBe("{\"email\":\"testing@testing.com\"}")
  })
})



