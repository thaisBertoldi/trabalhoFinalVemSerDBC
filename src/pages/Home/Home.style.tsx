import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerAllInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  
  @media (max-width: 1680px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 850px) {
    grid-template-columns: auto;
  }
`;

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${Theme.margin};
`;

export const DivDescriptionTopic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;



