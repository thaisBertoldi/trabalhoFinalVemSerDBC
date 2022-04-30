import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerRequest = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const ContainerRequestForm = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const InputLabelDiv = styled.div`
  display: flex;
`;

export const TextAreaCustom = styled.textarea`
  width: 100%;
  margin-top: 15px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid ${Theme.color.primary};
  border-radius: 4px;
  font-size: 16px;
  resize: none;
`;

export const DivItens = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  button {
    outline: none;
    border: none;
    background: transparent;
    font-size: 25px;
  }
`;

export const DivTopItens = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 18% 60% repeat(2, 10%);
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;

  img, p {
    margin-top: 20px;
  }

  @media (max-width: 1020px) {
    grid-template-columns: 22% 50% repeat(2, 10%);
  }

  @media (max-width: 768px) {
    grid-template-columns: 50% 30% 20%;
    img, span:first-child {
      display: none;
    }
  }
`;