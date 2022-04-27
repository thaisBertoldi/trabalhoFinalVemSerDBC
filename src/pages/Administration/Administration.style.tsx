import styled from "styled-components";
import { Theme } from "../../theme";

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
  @media (max-width: 650px) {
    grid-template-columns: auto;
  }
`;

export const ParagraphInfo = styled.p`
  visibility: hidden;
  position: absolute;
  z-index: 1;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  :hover {
    visibility: visible;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${Theme.margin};
`;
