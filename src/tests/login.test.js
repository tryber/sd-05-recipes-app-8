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

describe('funconalidades inputs', () => {
  test('deve ser possível digitar um emal válido', () => {
    const { getByTestId } = render(<MemoryRouter><App /></MemoryRouter>)
    const email = getByTestId("email-input");
    const button = getByTestId("login-submit-btn");
    fireEvent.change(email, { target: { value: 'teste@teste.com' } }) 
    expect(email.value).toBe('teste@teste.com')
    expect(button).toBeDisabled();
  });
  test('a senha deve ser maior que 6 caracteres', () => {
    const { getByTestId } = render(<MemoryRouter><App /></MemoryRouter>)
    const password = getByTestId("password-input");
    const button = getByTestId("login-submit-btn");
    fireEvent.change(password, { target: { value: '123456' } }) 
    expect(button).toBeDisabled();
    fireEvent.change(password, { target: { value: '12345678' } }) 
    expect(button).toBeEnabled();
  });
});

