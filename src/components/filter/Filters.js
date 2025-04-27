import styled from 'styled-components';
import { Select } from './Select';

const options = [
  'option 1',
  'option 2',
  'option 3',
  'option 4',
  'option 5',
  'option 6',
  'option 7',
  'option 8',
  'option 9',
  'option 10'
];

export function Filters() {
  return (
    <FilterContainer>
      <Select name="Status" options={options} gridArea="status" />

      <Select name="Gender" options={options} gridArea="gender" />

      <Select name="Species" options={options} gridArea="species" />

      <InputStyled style={{ gridArea: 'name' }} placeholder="Name" />
      <InputStyled style={{ gridArea: 'type' }} placeholder="Type" />

      <ApplyStyled style={{ gridArea: 'apply' }}>Apply</ApplyStyled>
      <ResetStyled style={{ gridArea: 'reset' }}>Reset</ResetStyled>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: grid;
  grid-template-areas:
    'status gender species species'
    'name type apply reset';
  grid-template-columns: 180px 180px 85px 85px;
  grid-template-rows: 40px 40px;
  gap: 10px;

  font-family: 'Inter', sans-serif;
  color: #ffffff;
`;

const InputStyled = styled.input`
  width: 180px;
  height: 40px;
  padding: 12px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0;
  border: 1px solid #83bf46;
  border-radius: 8px;
  background-color: #263750;
  transition: 0.3s ease;
  outline: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #334466;
  }

  &:focus {
    background-color: #334466;
  }
`;

const ApplyStyled = styled.button`
  width: 85px;
  height: 40px;
  color: #83bf46;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0;

  padding: 12px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #83bf46;
  border-radius: 8px;
  transition: 0.3s ease;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #83bf46;
  }
`;

const ResetStyled = styled.button`
  width: 85px;
  height: 40px;
  color: #ff5152;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0;

  padding: 12px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #ff5152;
  border-radius: 8px;
  transition: 0.3s ease;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #ff5152;
  }
`;
