import styled from "styled-components";
import { Theme } from "../../theme";


export const UserFormAdmin = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25%;
    gap: 15px;
    padding-bottom: ${Theme.padding};
    justify-content: center;

    select {
      width: 100%;
      
      padding: 5px;
      font-size: 14px;
      color: #25292a;
      border: none;
      border-bottom: 2px solid #25292a;
    }
`;

export const DivNameUser = styled.div`
  background-color: ${Theme.color.white};
  padding-left: 15px;
`;

export const DivAllCardUser = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100px;
  height: 200px;
  background-color: white;
`;