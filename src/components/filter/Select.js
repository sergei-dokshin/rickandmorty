import styled from 'styled-components';
import { useRef, useState } from 'react';
import ChevronDown from '../../assets/select-icons/chevron-down.svg';
import ChevronUp from '../../assets/select-icons/chevron-up.svg';
import CrossIcon from '../../assets/select-icons/cross-Icon.svg';
import { useCloseSelect } from '../../hooks/useCloseSelect';

export function Select({ name, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);
  const selectRef = useRef(null); // для SelectStyled
  const containerRef = useRef(null); // для выпадающего меню

  useCloseSelect(setIsOpen, containerRef); // Хук для закрытия выпадающего меню

  // Обрабатываем выбор
  const handleSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  // Очищаем значение
  const handleClear = () => {
    setSelectedValue('');
    setIsOpen(false);
  };

  // Отображаем иконку в зависимости от состояний
  const getIcon = () => {
    if (isOpen) {
      return ChevronUp;
    }
    if (selectedValue) {
      return CrossIcon;
    }

    return ChevronDown;
  };

  // Обрабатываем нажатие по иконкам
  const handleIconClick = (e) => {
    e.stopPropagation();

    if (selectedValue) {
      handleClear();
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <SelectWrapper ref={containerRef}>
      <SelectStyled
        onClick={() => setIsOpen((prev) => !prev)}
        ref={selectRef}
        gridArea={name.toLowerCase()}
      >
        <SelectedValue>{selectedValue || name}</SelectedValue>
        <Icon src={getIcon()} alt="Toggle" onClick={handleIconClick} />
      </SelectStyled>

      {isOpen && (
        <Dropdown>
          {options.map((option, index) => (
            <Option
              key={option}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              isHovered={index === hoverIndex}
              isSelected={selectedValue === option}
            >
              {option}
            </Option>
          ))}
        </Dropdown>
      )}
    </SelectWrapper>
  );
}

const SelectWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 40px;
`;

const SelectStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 12px;
  font-size: 16px;
  line-height: 40px;
  border: 1px solid #83bf46;
  border-radius: 8px;
  outline: none;
  background-color: #263750;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const SelectedValue = styled.span`
  font-size: 16px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;

  transition: fill 0.3s ease;

  &:hover {
    fill: #83bf46; /* Ваш акцентный цвет */
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 45px;
  left: 0;

  color: #1e1e1e;
  width: 100%;
  height: 152px;
  border: 1px solid #83bf46;
  border-radius: 8px;
  background-color: #ffffff;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;

  /* Убираем стрелки с полосы прокрутки */
  ::-webkit-scrollbar {
    width: 4px; /* Ширина полосы прокрутки */
  }

  ::-webkit-scrollbar-button {
    display: none; /* Убираем стрелки */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d9d9d9; /* Цвет бегунка */
    width: 4px;
    height: 80px;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;

  padding-left: 8px;
  padding-right: 8px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ffffff;
  font-weight: ${({ isSelected }) => (isSelected ? '600' : '400')};

  &:hover {
    background-color: #83bf4633;
  }
`;
