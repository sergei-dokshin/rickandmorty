import styled from 'styled-components';

export function Logo() {
  return <StyledLogo src="/assets/widget-logo.png" alt="logo" />;
}

const StyledLogo = styled.img`
  max-width: 300px;
  user-select: none;

  @media (max-width: 930px) {
    margin-bottom: 20px;
  }
`;
