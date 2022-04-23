import styled from "styled-components";
import { Theme } from "../../theme";

export const FooterCustom = styled.footer`
  background: ${Theme.color.black};
  padding: 30px;
  height: 140px;
  margin-top: 50px;
`;

export const Copyright = styled.small`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-top: 1px rgba(255, 255, 255, 0.301) solid;
  padding: 5px;
  color: rgba(255, 255, 255, 0.877);
`;
