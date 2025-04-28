import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback
} from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';

export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState('');

  const fetchData = useCallback(async (url) => {
    setIsFetching(true);
    setIsError(false);

    try {
      const { data } = await axios.get(url);
      setCharacters(data.results);
      setInfo(data.info);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);

      if (axios.isAxiosError(error)) {
        if (
          error.response?.status === 404 &&
          error.response?.data?.error === 'There is nothing here'
        ) {
          // Ничего не найдено — это не настоящая ошибка
          setCharacters([]);
          setInfo({});
        } else {
          setIsError(true);
          console.error(error);
        }
      } else {
        setIsError(true);
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    const params = window.location.search;

    if (params) {
      setApiURL(`${API_URL}${params}`);
    } else {
      setApiURL(API_URL);
    }
  }, []);

  useEffect(() => {
    if (!apiURL) return;
    fetchData(apiURL);
  }, [apiURL, fetchData]);

  const dataValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      apiURL,
      setApiURL,
      characters,
      fetchData,
      isFetching,
      isError,
      info
    }),
    [activePage, apiURL, characters, isFetching, isError, info, fetchData]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

const DataContext = createContext({});

export const useData = () => useContext(DataContext);
