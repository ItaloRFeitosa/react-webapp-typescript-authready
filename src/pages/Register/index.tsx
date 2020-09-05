import React, { useState} from 'react';
import {Link} from 'react-router-dom';

import {useAuth} from '../../contexts/AuthContext'

import {MdEmail, MdAccountBox, MdVpnKey, MdError} from 'react-icons/md';

import {Container, Content, Form, ErrorMsg } from './styles';
import { InputGroup, Button } from '../../styles/components';

const Register: React.FC = () => {
  const {register} = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [error, setError] = useState(
    {
      name: false,
      email: false,
      password: false
    }
  );

  function checkName(){
    if(name == null || name === '') setError({...error, name: true});
    else setError({...error, name: false});
  }

  function checkPassword(){
    if(repeatPassword !== password){
      setError({...error, password: true});
    } else {
      setError({...error, password: false});
    }
  }

  function validateEmail(){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailToValidate = String(email).toLowerCase();
    const isValid = re.test(emailToValidate);
    setError({...error, email: !isValid});
    setEmail(emailToValidate)
  }

  function handleRegistration(){
    checkName();
    checkPassword();
    validateEmail();

    if(!error.name && !error.email && !error.password){
      register({name, email, password})
    }
  }

  return (
  <Container>
    <Content>
      <h1>Crie uma Conta</h1>
      <Form>

        <ErrorMsg hidden={!error.name}>
          <MdError size={20}/>
          <p>Nome Obrigatório</p>
        </ErrorMsg>

        <InputGroup>
          <input
            type="text" required
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyUp={() => checkName()}
          />
          <label>Nome</label>
          <MdAccountBox size={32}/>
        </InputGroup>

        <ErrorMsg hidden={!error.email}>
          <MdError size={20}/>
          <p>Digite um email válido</p>
        </ErrorMsg>

        <InputGroup>
          <input
            type="text" required
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyUp={() => validateEmail()}
          />
          <MdEmail size={32}/>
          <label>Email</label>
        </InputGroup>

        <ErrorMsg hidden={!error.password}>
          <MdError size={20}/>
          <p>Senhas divergindo</p>
        </ErrorMsg>


        <InputGroup >
          <input type="password"required
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyUp={() => checkPassword()}
          />
          <label>Senha</label>
          <MdVpnKey size={32}/>
        </InputGroup>

        <ErrorMsg hidden={!error.password}>
          <MdError size={20}/>
          <p>Senhas divergindo</p>
        </ErrorMsg>

        <InputGroup >
          <input type="password" required
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
            onKeyUp={() => checkPassword()}
          />
          <label>Repita a Senha</label>
          <MdVpnKey size={32}/>
        </InputGroup>


        <Button onClick={() => handleRegistration()}>Registrar</Button>

        <Link to="/login">
          Já tenho uma Conta
        </Link>
      </Form>

    </Content>
  </Container>
  );
}
export default Register;
