import { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: none
  }
`;
