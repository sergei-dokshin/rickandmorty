import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useCloseSelect } from '../../hooks/useCloseSelect';
import { SvgIcon } from './SvgIcon';
import { DropdownMenu } from './DropdownMenu';
import { capitalize } from 'lodash';
import { useEffect } from 'react';

export function FilterSelect({ name, options, filters, setFilters }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const containerRef = useRef(null); // для SelectWrapper
  const capitalizedName = capitalize(name);

  useCloseSelect(setIsOpen, containerRef); // Хук для закрытия выпадающего меню

  // Обрабатываем выбор
  const handleSelect = (option) => {
    setSelectedValue(option);

    const newFilters = { ...filters, [name]: option };
    setFilters(newFilters);
    setIsOpen(false);
  };

  // Очищаем значение
  const handleClear = () => {
    setSelectedValue('');
    setIsOpen(false);
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

  useEffect(() => {
    if (filters && name in filters) {
      setSelectedValue(capitalize(filters[name]));
    }
  }, [filters, name]);

  return (
    <SelectWrapper ref={containerRef}>
      <SelectStyled onClick={() => setIsOpen((prev) => !prev)} gridArea={name}>
        <SelectedValue $isDefault={!selectedValue}>
          {selectedValue || capitalizedName}
        </SelectedValue>

        <SvgIcon
          handleIconClick={handleIconClick}
          isOpen={isOpen}
          selectedValue={selectedValue}
        />
      </SelectStyled>

      {isOpen && (
        <DropdownMenu
          options={options}
          handleSelect={handleSelect}
          selectedValue={selectedValue}
        />
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
  user-select: none;
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
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ $isDefault }) => ($isDefault ? '#B3B3B3' : '#ffffff')};
`;
