import styled from 'styled-components';

export function SvgIcon({ handleIconClick, isOpen, selectedValue }) {
  return (
    <SvgStyled
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleIconClick}
    >
      {isOpen ? (
        <path
          d="M4 10L8 6L12 10"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : selectedValue ? (
        <>
          <path
            d="M4 12L8 8L12 12"
            stroke="#F5F5F5"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 4L8 8L12 4"
            stroke="#F5F5F5"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <path
          d="M4 6L8 10L12 6"
          stroke="#B2B2B2"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </SvgStyled>
  );
}

const SvgStyled = styled.svg`
  user-select: none;

  path {
    transition: stroke 0.2s ease;
  }

  &:hover path {
    stroke: #83bf46;
  }
`;
