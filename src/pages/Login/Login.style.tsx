import styled from "styled-components";
import { Theme } from "../../theme";

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${Theme.margin} 0;
`;

export const ContainerLogin = styled.div`
  width: 100%;
`;

export const DivInputsLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${Theme.margin};
  gap: 15px;
`;

export const DivEye = styled.div`
  position: absolute;
  right: 30px;
  bottom: 40.5%;
  color: ${Theme.color.white};

  @media (max-width: 700px) {
    bottom: 41%;
  }
  @media (max-width: 480px) {
    bottom: 43%;
  }
  @media (max-width: 380px) {
    visibility: hidden;
  }
`;
