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
  border: 1px solid ${Theme.color.primary};
  margin: ${Theme.margin};
`;
