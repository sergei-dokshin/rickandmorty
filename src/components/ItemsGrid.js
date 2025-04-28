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
    return <h3>Таких персонажей не найдено</h3>;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;
`;
