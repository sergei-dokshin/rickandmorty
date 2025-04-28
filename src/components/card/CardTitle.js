import styled from 'styled-components';
import { ReactComponent as Male } from '../../assets/genders/male.svg';
import { ReactComponent as Female } from '../../assets/genders/female.svg';
import { ReactComponent as Genderless } from '../../assets/genders/genderless.svg';

export function CardTitle({ name, gender, className }) {
  const Icon = (() => {
    if (gender === 'Male') {
      return <Male width={20} height={20} fill="#33b3c8" title="Male" />;
    }

    if (gender === 'Female') {
      return <Female width={24} height={24} fill="pink" title="Female" />;
    }

    if (gender === 'unknown' || gender === 'Genderless') {
      return (
        <Genderless width={24} height={24} fill="#999" title="Genderless" />
      );
    }

    return null;
  })();

  return (
    <CardTitleContainer className={className}>
      <StyledCardTitle className="card-title">
        {name}
        <IconContainer>{Icon}</IconContainer>
      </StyledCardTitle>
    </CardTitleContainer>
  );
}

const CardTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledCardTitle = styled.h2`
  max-width: 100%;
  font-size: 24px;
  text-align: center;

  @media (max-width: 450px) {
    max-width: 130px;
    font-size: 18px;
  }
`;

const IconContainer = styled.span`
  margin-left: 8px;
`;
