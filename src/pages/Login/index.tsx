import React from 'react';
import {Link} from 'react-router-dom';

import {MdEmail, MdVpnKey, MdArrowForward} from 'react-icons/md';

import {Container, Content, Form } from './styles';
import { InputGroup, Button } from '../../styles/components';

const Login: React.FC = () =>
  <Container>
    <Content>
      <h1>Faça Login</h1>
      <Form>
        <InputGroup>
          <input type="text" required/>
          <label>Email</label>
          <MdEmail size={32}/>
        </InputGroup>
        <InputGroup >
          <input type="password" required/>
          <label>Senha</label>
          <MdVpnKey size={32}/>
        </InputGroup>
        <Button><MdArrowForward size={32}/></Button>
        <Link to="">
          Ou crie uma Conta
        </Link>
      </Form>

    </Content>
  </Container>

export default Login;
