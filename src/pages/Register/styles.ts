import styled from 'styled-components';

import { fadeInUp } from '../../styles/animations';

import {darken} from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 480px;
  padding: 72px 48px 32px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  animation: ${fadeInUp} 0.4s linear;

  h1 {
    text-align: center;
  }

`;

export const Form = styled.div`
  margin-top: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  button {
    margin-top: 20px;
  }

  a {
    margin-top: 32px;
    color: ${props => props.theme.colors.light};
    font-weight: bold;
    text-decoration: none;
    font-size: 20px;
    transition: 0.4s;

    &:hover{
      color: ${props => props.theme.colors.medium};
    }
  }
`;

export const ErrorMsg = styled.div`
    display: ${props => props.hidden ? 'none' : 'flex'};
    align-items:center;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 5px;
    text-align: end;
    vertical-align: middle;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    animation: ${fadeInUp} 0.2s linear;


    p{
      margin-left:5px;
    }

  }`;
