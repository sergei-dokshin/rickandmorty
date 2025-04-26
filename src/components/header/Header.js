import styled from 'styled-components';
import { Logo } from './Logo';
import { Filters } from '../filter/Filters';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Filters />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 31px;
  }
`;
