import styled from 'styled-components';

export function Portal() {
  return <StyledPortal src="/assets/loader-original.png" alt="portal" />;
}

const StyledPortal = styled.img`
  max-width: 300px;
  user-select: none;
  margin-top: 30px;
`;
