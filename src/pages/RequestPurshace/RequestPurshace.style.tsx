import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerRequestForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 1000px;
`;

export const ContainerRequest = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 436px;
`;

export const InputLabelDiv = styled.div`
  display: flex;
`;

export const TextAreaCustom = styled.textarea`
  width: 102%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid ${Theme.color.primary};
  border-radius: 4px;
  font-size: 16px;
  resize: none;
`;
