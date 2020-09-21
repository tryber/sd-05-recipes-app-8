import React from 'react';
import { InputEmail, InputPassword, BtnLogin, Progress } from '../components';
import Card from '../components/Card';

const Login = () => (
  <Card>
    <h1>Batida de Front</h1>
    <InputEmail />
    <InputPassword />
    <BtnLogin />
    <Progress />
  </Card>
);

export default Login;
