import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import ChevronDown from '../../assets/select-icons/chevron-down.svg';
import ChevronUp from '../../assets/select-icons/chevron-up.svg';
import CrossIcon from '../../assets/select-icons/cross-Icon.svg';

export function Filters() {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const isEmpty = value === '';

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clearSelection = () => {
    setValue('');
    setIsOpen(false);

    if (selectRef.current) {
      selectRef.current.blur();
    }
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  const icon = (() => {
    if (!isEmpty) return ''; // Если выбрана опция, крестик отдельно

    return isOpen ? ChevronUp : ChevronDown; // Иначе стрелки в зависимости от isOpen
  })();

  return (
    <FilterContainer>
      <SelectWrapper>
        <SelectStyled
          ref={selectRef}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          $icon={icon}
          style={{ gridArea: 'status' }}
        >
          <option value="" disabled hidden>
            Status
          </option>
          <option value="status">Status 1</option>
          <option value="gender">Status 2</option>
          <option value="species">Status 3</option>
        </SelectStyled>

        {!isEmpty && (
          <ClearButton onClick={clearSelection}>
            <img src={CrossIcon} alt="Clear" />
          </ClearButton>
        )}
      </SelectWrapper>

      <SelectStyled style={{ gridArea: 'gender' }}>
        <option>Gender 1</option>
        <option>Gender 2</option>
      </SelectStyled>

      <SelectStyled style={{ gridArea: 'species' }}>
        <option>Species 1</option>
        <option>Species 2</option>
      </SelectStyled>

      <InputStyled style={{ gridArea: 'name' }} placeholder="Name" />
      <InputStyled style={{ gridArea: 'type' }} placeholder="Type" />

      <ApplyStyled style={{ gridArea: 'apply' }}>Apply</ApplyStyled>
      <ResetStyled style={{ gridArea: 'reset' }}>Reset</ResetStyled>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: grid;
  grid-template-areas:
    'status gender species species'
    'name type apply reset';
  grid-template-columns: 180px 180px 85px 85px;
  grid-template-rows: 40px 40px;
  gap: 10px;

  font-family: 'Inter', sans-serif;
  color: #ffffff;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 180px;
`;

const SelectStyled = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 36px 0 12px;
  font-size: 16px;
  line-height: 40px;
  border: 1px solid #83bf46;
  border-radius: 8px;
  outline: none;
  background-color: #263750;
  color: white;
  appearance: none;
  transition: background-color 0.3s ease;
  transition: background-image 0;

  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  ${({ $icon }) => $icon && `background-image: url(${$icon});`}
`;

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 16px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const InputStyled = styled.input`
  width: 180px;
  height: 40px;
  padding: 12px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0;
  border: 1px solid #83bf46;
  border-radius: 8px;
  background-color: #263750;
  transition: 0.3s ease;
  outline: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #334466;
  }

  &:focus {
    background-color: #334466;
  }
`;

const ApplyStyled = styled.button`
  width: 85px;
  height: 40px;
  color: #83bf46;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0;

  padding: 12px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #83bf46;
  border-radius: 8px;
  transition: 0.3s ease;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #83bf46;
  }
`;

const ResetStyled = styled.button`
  width: 85px;
  height: 40px;
  color: #ff5152;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0;

  padding: 12px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #ff5152;
  border-radius: 8px;
  transition: 0.3s ease;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #ff5152;
  }
`;
