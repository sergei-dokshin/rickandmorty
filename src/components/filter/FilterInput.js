import { capitalize } from 'lodash';
import styled from 'styled-components';

export function FilterInput({ name, filters, setFilters }) {
  return (
    <InputStyled
      value={filters[name]}
      onChange={(e) =>
        setFilters({
          ...filters,
          [name]: e.target.value
        })
      }
      placeholder={capitalize(name)}
      style={{ gridArea: name }}
    />
  );
}

const InputStyled = styled.input`
  height: 40px;
  padding: 12px 12px 12px 16px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0;
  border: 1px solid #83bf46;
  border-radius: 8px;
  background-color: #263750;
  transition: background-color 0.3s ease;
  outline: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1220px) {
    width: 180px;
  }

  @media (max-width: 950px) {
    width: 150px;
  }

  @media (max-width: 530px) {
    width: 240px;
  }

  &:hover {
    background-color: #334466;
  }

  &:focus {
    background-color: #334466;
  }
`;
