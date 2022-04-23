import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerCard = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const CardItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const TitleCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DivButtonsCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ButtonCard = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: rgb(29,184,67);
  background: linear-gradient(90deg, rgba(29,184,67,1) 0%, rgba(0,113,191,1) 100%);
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 580px) {
    width: 150px;
  } 
`;