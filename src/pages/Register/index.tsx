import React from 'react';
import {Link} from 'react-router-dom';

import {MdEmail, MdAccountBox, MdVpnKey, MdArrowForward} from 'react-icons/md';

import {Container, Content, Form } from './styles';
import { InputGroup, Button } from '../../styles/components';

const Register: React.FC = () => {
  return (
  <Container>
    <Content>
      <h1>Crie uma Conta</h1>
      <Form>
        <InputGroup>
          <input type="text" required/>
          <label>Nome</label>
          <MdAccountBox size={32}/>
        </InputGroup>
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
        <InputGroup >
          <input type="password" required/>
          <label>Repita a Senha</label>
          <MdVpnKey size={32}/>
        </InputGroup>
        <Button>Registrar</Button>
        <Link to="/login">
          Já tenho uma Conta
        </Link>
      </Form>

    </Content>
  </Container>
  );
}
export default Register;
