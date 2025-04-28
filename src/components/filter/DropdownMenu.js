import { useState } from 'react';
import styled from 'styled-components';

export function DropdownMenu({ options, handleSelect, selectedValue }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
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
  );
}

const Dropdown = styled.div`
  position: absolute;
  top: 45px;
  left: 0;

  color: #1e1e1e;
  width: 240px;
  max-height: 152px;
  border: 1px solid #83bf46;
  border-radius: 8px;
  background-color: #ffffff;
  overflow-y: auto;
  z-index: 10;

  @media (max-width: 1220px) {
    width: 180px;
  }

  @media (max-width: 950px) {
    width: 150px;
  }

  @media (max-width: 530px) {
    width: 240px;
  }

  /* Стили для бегунка полосы прокрутки */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Убираем стрелки */
  ::-webkit-scrollbar-button {
    display: none;
  }

  /* Вид бегунка */
  ::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    width: 4px;
    border-radius: 8px;
  }

  /* Отступы, чтобы бегунок не выходил за пределы скругленных углов контейнера */
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
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  background-color: #ffffff;
  font-weight: ${({ isSelected }) => (isSelected ? '600' : '400')};

  &:hover {
    background-color: #83bf4633;
  }
`;
