import styled from "styled-components";
import { Theme } from "../../theme";


export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-height: 600px;
  background-color: #fff;
  border-radius: 15px;
  padding-bottom: 20px;
  -webkit-box-shadow: 0px 1px 31px 9px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 1px 31px 9px rgba(105, 105, 105, 0.46);

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 1620px) {
    
  }
`;

export const TitleCard = styled.div`
  background-color: ${Theme.color.primary};
  padding: 10px;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TopicName = styled.div`
  display: flex;
  align-items: center;
  font-size: 50px;
  gap: 15px;

  h2 {
    font-size: 20px;
  }
  span {
    font-size: 15px;
  }
`;

export const DivStatus = styled.div<{color: string}>`
  display: flex;
  justify-content: flex-end;
  color: ${props => props.color}
`;

export const InfoDataPrice = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DivButtonsCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 1px;
`;

export const ButtonCard = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 40px;
  border: none;

  background-color: ${Theme.color.grayDark};
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 580px) {
    width: 150px;
  }
`;