import React from 'react';
import { InputEmail, InputPassword, BtnLogin } from '../components';
import Card from '../layouts/Card';

const Login = () => (
  <Card>
    <h1>«Login»</h1>
    <InputEmail />
    <InputPassword />
    <BtnLogin />
  </Card>
);

export default Login;
