import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerRequest = styled.div`
  width: 100%;
  height: 436px;
  
  margin-top: 30px;
`;

export const ContainerRequestForm = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  input[type="file"] {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
  }
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

export const DivItens = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;
  
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
