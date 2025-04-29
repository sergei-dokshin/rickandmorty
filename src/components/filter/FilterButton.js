import { capitalize } from 'lodash';
import styled from 'styled-components';

export function FilterButton({ name, accentColor, handleClick }) {
  return (
    <ButtonStyled onClick={handleClick} $accentColor={accentColor}>
      {capitalize(name)}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: 100%;
  height: 40px;
  color: ${({ $accentColor }) => ($accentColor ? $accentColor : 'white')};
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0;

  padding: 12px;
  background-color: rgba(255, 255, 255, 0);
  border: ${({ $accentColor }) =>
    $accentColor ? `1px solid ${$accentColor}` : '1px solid white'};
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: ${({ $accentColor }) =>
      $accentColor ? $accentColor : 'white'};
  }
`;
