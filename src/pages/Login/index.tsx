import React, {useState} from 'react';
import {Link, useHistory, Redirect} from 'react-router-dom';

import {useAuth} from '../../contexts/AuthContext';

import {loginService, LoginDto} from '../../services/auth.api'

import {MdEmail, MdVpnKey, MdArrowForward} from 'react-icons/md';

import {Container, Content, Form } from './styles';
import { InputGroup, Button } from '../../styles/components';



const Login: React.FC = () => {

  const {login} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function handleLogin(){
    setEmail(String(email).toLowerCase());
    login({ email, password });
    history.push('/dashboard');
  }

  return(
    <Container>
      <Content>
        <h1>Faça Login</h1>
        <Form>

          <InputGroup>
            <input
              type="text"
              required
              onChange={e => setEmail(e.target.value)}
            />
            <label>Email</label>

            <MdEmail size={32}/>
          </InputGroup>

          <InputGroup >
            <input
              type="password"
              required
              onChange={e => setPassword(e.target.value)}
            />

            <label>Senha</label>
            <MdVpnKey size={32}/>
          </InputGroup>

          <Button onClick={handleLogin}><MdArrowForward size={32}/></Button>

          <Link to="/register">
            Ou crie uma Conta
          </Link>
        </Form>

      </Content>
    </Container>
  );
}
export default Login;
