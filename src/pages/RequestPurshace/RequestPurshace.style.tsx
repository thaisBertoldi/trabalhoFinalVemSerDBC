import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerRequestForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 1000px;
`;

export const RequestCenter = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`;

export const ContainerRequest = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    height: 436px;
`;

export const InputForm = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 4px;
    border: 1px ${Theme.color.primary} solid;
`;

export const InputLabelDiv = styled.div`
    display: flex;
`;

export const TextAreaCustom = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid ${Theme.color.primary};
  border-radius: 4px;
  font-size: 16px;
  resize: none;
`;