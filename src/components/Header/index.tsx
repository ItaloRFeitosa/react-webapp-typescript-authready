import React from 'react';

import {useHistory} from 'react-router-dom';

import {Container, Logo, NavBar} from './styles';

import {MdPowerSettingsNew} from 'react-icons/md';

interface HeaderProps{
  handleLogout(): void;
}

const Header: React.FC<HeaderProps> = ({handleLogout}) => {
  const history = useHistory();

  return(
    <Container>
      <Logo>Comapany Name</Logo>
      <NavBar>
        <a href="#">Configurações</a>
        <button onClick={() => {
            handleLogout();
            history.push('/login');
          }
        }><MdPowerSettingsNew size={32}/></button>
      </NavBar>
    </Container>
  )
};

export default Header;
