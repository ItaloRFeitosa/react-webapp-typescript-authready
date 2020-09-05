import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  margin-bottom: 16px;
  transition: 0.4s;
  color:${props => props.theme.colors.medium};

  div {
    position: relative;
    input {
      z-index: 1;
      width: 100%;
      font-size: 20px;
      height: 60px;
      font-weight: bold;

      border: none;
      border-radius: 5px;
      padding: 24px 8px 8px;
      transition: 0.4s;
      background: ${props => props.theme.colors.light};

      &:focus {
        border: 2px solid ${props => props.theme.colors.dark};
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.dark};


      }
      &:valid ~ svg,
      &:focus ~ svg{
        color: ${props => props.theme.colors.dark};
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



    label{
      z-index: 2;
      font-weight: bold;

      transition: 0.4s;
      position: absolute;
      transform: translateY(-50%);
      left: 15px;
      top: 50%;
      font-size: 20px;
      touch-action: manipulation;
    }

    svg {
      transition: 0.4s;
      position: absolute;
      transform: translateY(-50%);
      right: 15px;
      top: 50%;
    }
  }

  &:focus-within{
      transform: translateY(-4px);
  }
  p{
    color: ${props => props.theme.colors.primary};
    font-size: 8;
    font-weight: bold;
    margin-right: 5px;
    margin-bottom: 5px;
    text-align: end;
  }

`;

