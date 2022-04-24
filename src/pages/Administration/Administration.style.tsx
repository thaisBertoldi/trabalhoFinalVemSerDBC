import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerAdmin = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  gap: 15px;
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
