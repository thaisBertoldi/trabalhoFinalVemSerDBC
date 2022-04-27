import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerAllInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  
  @media (max-width: 1575px) {
    grid-template-columns: auto;
  }
`;

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${Theme.margin};
`;