import styled from 'styled-components';

import {darken} from 'polished';

import {fadeInUp} from '../../styles/animations'

export const Container = styled.header`
  width: 100%;
  height:80px;
  padding: 0 128px;

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.title};

  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: ${fadeInUp} 0.4s linear;
`;

export const Logo = styled.h1`
  font-size: 32px;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${props => props.theme.colors.medium};

  a {
    font-weight: 500;
    text-decoration: none;
    font-size: 24px;
    margin-right: 48px;
    color: ${props => props.theme.colors.medium};
    transition: 0.4s;

    &:hover {
      color: ${props => props.theme.colors.title}
    }
  }

  button {
    height: 60px;
    width: 60px;
    text-align: center;
    color: ${props => props.theme.colors.medium};
    border: none;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    transition: 0.4s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.background};
      box-shadow: 0 14px 28px rgba(0,0,0,0.23), 0 10px 10px rgba(0,0,0,0.20);
      transform: translateY(-1px);
    }
  }

`;
