import styled from 'styled-components';
import { FilterSelect } from './FilterSelect';
import { useFiltersUrl } from '../../hooks/useFiltersURL';
import { updateURL } from '../../utils/updateURL';
import { useData } from '../providers/DataProvider';
import { SELECT_OPTIONS } from '../constants/select-options';
import { FilterInput } from './FilterInput';

const API_URL = 'https://rickandmortyapi.com/api/character?';

export function Filter() {
  const { filters, setFilters, reset } = useFiltersUrl();
  const { setActivePage, setApiURL } = useData();

  function applyFilters() {
    updateURL(filters);

    const params = new URLSearchParams(window.location.search);

    setApiURL(API_URL + params);
    setActivePage(0);
  }

  function resetFilters() {
    reset();
    updateURL({
      name: '',
      status: '',
      species: '',
      gender: '',
      type: ''
    });

    const params = new URLSearchParams(window.location.search);

    setApiURL(API_URL + params);
    setActivePage(0);
  }

  return (
    <FilterContainer>
      <FilterSelect
        name="status"
        options={SELECT_OPTIONS.status}
        filters={filters}
        setFilters={setFilters}
      />

      <FilterSelect
        name="gender"
        options={SELECT_OPTIONS.gender}
        filters={filters}
        setFilters={setFilters}
      />

      <FilterSelect
        name="species"
        options={SELECT_OPTIONS.species}
        filters={filters}
        setFilters={setFilters}
      />

      <FilterInput name="name" filters={filters} setFilters={setFilters} />
      <FilterInput name="type" filters={filters} setFilters={setFilters} />

      <ApplyStyled style={{ gridArea: 'apply' }} onClick={applyFilters}>
        Apply
      </ApplyStyled>
      <ResetStyled style={{ gridArea: 'reset' }} onClick={resetFilters}>
        Reset
      </ResetStyled>
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
  transition: background-color 0.3s ease;
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
  transition: background-color 0.3s ease;

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
  transition: background-color 0.3s ease;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #ff5152;
  }
`;
