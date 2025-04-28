import { useEffect } from 'react';

export function useStopPageScroll(dependency) {
  // Убираем скроллинг при открытом Popup
  useEffect(() => {
    // Получаем ширину скроллбара для компенсации(убираем резкое смещение экрана)
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (dependency) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`; // Компенсируем ширину скроллбара
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [dependency]);
}
