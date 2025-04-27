import { useEffect } from 'react';

export function useCloseSelect(setIsOpen, containerRef) {
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Добавляем обработчики
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', handleClickOutside);

    // Очищаем обработчики при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsOpen, containerRef]); // Зависимости
}
