import React from 'react';
import { InputEmail, InputPassword, BtnLogin, Progress } from '../components';
import Card from '../components/Card';

const Login = () => (
  <Card>
    <span>foo@bar.com</span>
    <InputEmail />
    <InputPassword />
    <BtnLogin />
    <Progress />
  </Card>
);

export default Login;
