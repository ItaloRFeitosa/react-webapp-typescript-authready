import styled from 'styled-components';

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
  padding: 72px 48px 24px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  h1 {
    text-align: center;
  }

`;

export const Form = styled.div`
  margin-top: 32px;
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
    color: ${props => props.theme.lightColor};
    font-weight: bold;
    text-decoration: none;
    font-size: 20px;
    transition: 0.4s;

    &:hover{
      color: ${props => props.theme.mediumColor};
    }
  }
`;

