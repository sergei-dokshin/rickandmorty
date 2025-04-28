import { useState } from 'react';
import styled from 'styled-components';
import { Popup } from './popup';
import { useData } from './providers';
import { Card } from './card';
import { useStopPageScroll } from '../hooks/useStopPageScroll';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid() {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);

  function cardOnClickHandler(payload) {
    setPopupSettings({ visible: true, content: { ...payload } });
  }

  // Убираем скроллинг при открытом Popup
  useStopPageScroll(popupSettings.visible);

  if (!characters.length) {
    return (
      <NotFound>
        <h3>Таких персонажей не найдено!</h3>
        <p>Попробуйте поменять настройки фильтра.</p>
      </NotFound>
    );
  }

  return (
    <Container>
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          cardOnClickHandler={cardOnClickHandler}
        />
      ))}

      <Popup settings={popupSettings} setSettings={setPopupSettings} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;

  width: 100%;
  padding-top: 20px;
`;

const NotFound = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Comic Sans MS', cursive, sans-serif;

  h3 {
    color: #83bf46;
    text-transform: uppercase;
    text-align: center;
    margin-top: 1rem;
  }

  p {
    color: #ff5152;
    margin-top: 0.5rem;
    font-size: 85%;
    text-align: center;
  }
`;
