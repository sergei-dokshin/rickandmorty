import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  margin: auto;
  background: url('/assets/green-portal.png') center no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  animation: ${spin} 2s linear infinite;
`;
