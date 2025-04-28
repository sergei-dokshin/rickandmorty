import { useState } from 'react';
import styled from 'styled-components';
import { Popup } from './popup';
import { useData } from './providers';
import { Card } from './card';
import { useEffect } from 'react';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid() {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);

  function cardOnClickHandler(props) {
    setPopupSettings({ visible: true, content: { ...props } });
  }

  // Убираем скроллинг при открытом Popup
  useEffect(() => {
    // Получаем ширину скроллбара для компенсации(убираем резкое смещение экрана)
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (popupSettings.visible) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`; // Компенсируем ширину скроллбара
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [popupSettings.visible]);

  if (!characters.length) {
    return <h3>Таких персонажей не найдено</h3>;
  }

  return (
    <Container>
      {characters.map((character) => (
        <Card
          key={character.id}
          onClickHandler={() => cardOnClickHandler(character)}
          {...character}
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
