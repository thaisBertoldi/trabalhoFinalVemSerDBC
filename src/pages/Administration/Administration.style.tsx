import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerAdmin = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: center;
  gap: 15px;

  @media (max-width: 1560px) {
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: 1275px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`;

export const CardUSerAdmin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  gap: 15px;
  justify-content: center;
  background-color: white;
  select {
    width: 60%;
    padding: 5px;
    font-size: 14px;
    color: #25292a;
    border: none;
    border-bottom: 2px solid #25292a;
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    font-family: "Poppins", sans-serif;
  }
`;

export const ImageUser = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const DivImage = styled.div`
  width: 100px;
  height: 100px;
`;

export const DataUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnAdm = styled.button<{
  width: string;
  color: string;
  background: string;
}>`
  width: ${(props) => props.width};
  height: 42px;
  background: ${(props) => props.background};
  border-radius: 14px;
  outline: none;
  border: none;
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: 14px;

  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  font-family: "Poppins", sans-serif;
`;

export const ParagraphInfo = styled.p`
  @media (max-width: 1000px) {
    display: none;
  }
`;
