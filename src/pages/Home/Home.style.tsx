import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerTitles = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding: ${Theme.padding};
`;

export const ContainerPrincipalCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 80%;
  margin: ${Theme.margin};
  background-color: ${Theme.color.white};
  border-radius: 14px;
`;
