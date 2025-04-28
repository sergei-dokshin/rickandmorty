import { useState, useEffect } from 'react';
import axios from 'axios';
import { capitalize } from '../utils/capitalize';

const API_URL = 'https://rickandmortyapi.com/api/character';

export function useSelectOptions() {
  // Все возможные опции для status и gender взяты из документации
  const [options, setOptions] = useState({
    status: ['Alive', 'Dead', 'Unknown'],
    gender: ['Female', 'Male', 'Genderless', 'Unknown'],
    species: [
      'Human',
      'Alien',
      'Humanoid',
      'Unknown',
      'Poopybutthole',
      'Mythological Creature',
      'Animal',
      'Robot',
      'Cronenberg',
      'Disease'
    ]
  });
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  // Поочередно загружаем 42 страницы для получения всех возможных species
  useEffect(() => {
    const fetchSpecies = async () => {
      setIsFetching(true);
      setIsError(false);

      let page = 1;
      let allSpecies = new Set();
      let finished = false;

      try {
        // Постранично загружаем данные и получаем species, т.к. API не дает список всех персонажей сразу
        while (!finished) {
          const { data } = await axios.get(`${API_URL}?page=${page}`);

          data.results.forEach((character) => {
            allSpecies.add(capitalize(character.species));
          });

          if (data.info.next) {
            page++;
          } else {
            finished = true;
          }
        }

        setOptions((prev) => ({
          ...prev,
          species: Array.from(allSpecies)
        }));

        setIsFetching(false);
      } catch (error) {
        console.error('Ошибка загрузки Species', error);
        setIsFetching(false);
        setIsError(true);
      }
    };

    fetchSpecies();
  }, []);

  return { options, isFetching, isError };
}
