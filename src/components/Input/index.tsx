import React from 'react';

import { Container } from './styles';

import {IconType} from 'react-icons';

interface InputProps {
  type: string;
  label: string;
  value: string;
  setValue(value: string): void;
  Icon?: IconType;
  error?: boolean;
  errorText?: string;
}

const Input:React.FC<InputProps> = (
    {
      type,
      label,
      value,
      setValue,
      Icon = null,
      error = false,
      errorText = ''
    }
  ) => {
  return (
    <Container>
      <p hidden={!error}>{errorText}</p>
      <div>
        <input
          required
          type={type}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <label>{label}</label>
        {Icon && <Icon size={32}/>}
      </div>
    </Container>
  );

}

export default Input;
