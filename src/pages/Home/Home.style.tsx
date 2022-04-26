import styled from "styled-components";
import { Theme } from "../../theme";
import { FcInspection } from "react-icons/fc";

export const ContainerCard = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-bottom: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const TitleCard = styled.div<{color: string}>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  background-color: ${props => props.color};
  padding: 20px;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, 1fr);
  }

`;

export const DivButtonsCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 15px;
`;

export const ButtonCard = styled.button`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #393e3f;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 580px) {
    width: 150px;
  } 
`;

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${Theme.margin};
`;

export const TopicName = styled.div`
  display: flex;
  align-items: center;
  font-size: 50px;

  h2 {
    font-size: 20px;
  }
`;