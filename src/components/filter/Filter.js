import styled from 'styled-components';
import { FilterSelect } from './FilterSelect';
import { useFiltersUrl } from '../../hooks/useFiltersURL';
import { updateURL } from '../../utils/updateURL';
import { useData } from '../providers/DataProvider';
import { SELECT_OPTIONS } from '../constants/select-options';
import { FilterInput } from './FilterInput';
import { FilterButton } from './FilterButton';

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

      <ButonsContainer style={{ gridArea: 'buttons' }}>
        <FilterButton
          name="apply"
          accentColor="#83bf46"
          handleClick={applyFilters}
        />
        <FilterButton
          name="reset"
          accentColor="#ff5152"
          handleClick={resetFilters}
        />
      </ButonsContainer>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: grid;
  grid-template-areas:
    'status gender species'
    'name type buttons';
  grid-template-columns: 180px 180px 180px;
  grid-template-rows: 40px 40px;
  gap: 10px;

  font-family: 'Inter', sans-serif;
  color: #ffffff;

  @media (max-width: 950px) {
    grid-template-columns: 150px 150px 150px;
    gap: 15px;
  }

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 240px;
  }
`;

const ButonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 100%;
  width: 100%;
  padding: 0;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;
