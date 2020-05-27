import styled from 'styled-components';

import { darken } from 'polished';

export const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;

  input {
    z-index: 1;
    width: 100%;
    font-size: 20px;
    height: 60px;
    font-weight: bold;

    color: #333;
    border: none;
    border-radius: 5px;
    padding: 24px 8px 8px;
    transition: 0.4s;
    color: ${props => props.theme.colors.medium};
    background: ${props => props.theme.colors.light};

    &:focus {
      border: 2px solid ${props => props.theme.colors.dark};
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.dark};


    }
    &:valid ~ svg,
    &:focus ~ svg{
      color: #03191E;
    }

    &:valid{
      color: ${props => props.theme.colors.dark};
    }

    &:valid ~ label,
    &:focus ~ label{
      color: ${props => props.theme.colors.dark};
      font-size: 16px;
      top: 16px;
      left: 8px;

    }
  }

  &:focus-within{
    transform: translateY(-4px);
  }

  label{
    z-index: 2;
    font-weight: bold;
    color:${props => props.theme.colors.medium};
    transition: 0.4s;
    position: absolute;
    transform: translateY(-50%);
    left: 15px;
    top: 50%;
    font-size: 20px;
    touch-action: manipulation;
  }
  svg {

    color:${props => props.theme.colors.medium};
    transition: 0.4s;
    position: absolute;
    transform: translateY(-50%);
    right: 15px;
    top: 50%;
  }
`;

export const Button = styled.button`
  color: ${props => props.theme.colors.background};
  width: 100%;
  font-size: 20px;
  height: 60px;
  transition: 0.4s;
  background: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 5px;

  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.23), 0 10px 10px rgba(0,0,0,0.20);
    transform: translateY(-4px);

    background: ${props => darken(0.1, props.theme.colors.primary)};
  }
`;
