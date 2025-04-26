import styled from 'styled-components';
import { CardStatus, CardTitle } from '../card';

export function PopupHeader({ image, name, gender, status, species, type }) {
  return (
    <PopupHeaderContainer>
      <PopupImage src={image} alt={name} />
      <PopupTitle name={name} gender={gender} />
      <PopupStatus status={status} species={species} type={type} />
    </PopupHeaderContainer>
  );
}

const PopupHeaderContainer = styled.div`
  min-height: 444px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopupTitle = styled(CardTitle)`
  font-size: 22px;
  margin-top: 30px;
`;

const PopupStatus = styled(CardStatus)`
  font-size: 20px;

  & p {
    text-align: center;
    margin-top: 10px;
  }
`;

const PopupImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 350px;
  object-fit: cover;
  border-radius: 5px;
`;
