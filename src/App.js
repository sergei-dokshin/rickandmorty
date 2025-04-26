import styled from 'styled-components';
import { Pagination, ItemsGrid, useData, Header, AppState } from './components';

export function App() {
  const { isFetching, isError } = useData();

  return (
    <Main>
      <Header />

      <AppState />

      {!isFetching && !isError && (
        <>
          <ItemsGrid />

          <Pagination />
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 50px;
  max-width: 1520px;
  margin: 0 auto;

  @media (max-width: 1050px) {
    padding: 20px 20px;
  }
`;
