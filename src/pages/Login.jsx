import React from 'react';
import { InputEmail, InputPassword, BtnLogin } from '../components';
import Card from '../components/Card';

const Login = () => (
  <Card>
    <span>foo@bar.com</span>
    <InputEmail />
    <InputPassword />
    <BtnLogin />
  </Card>
);

export default Login;
