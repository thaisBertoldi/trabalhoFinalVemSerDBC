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

  /* input[type="file"] {
    display: none;
  }

  label {
    padding: 20px 10px;
    margin-top: 20px;
    width: 200px;
    background: #333;
    color:#FFF;
    text-transform: uppercase;
    display: block;
    margin-top: 10OPX;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    cursor: pointer;
    transition: .5s;
    border: 1px solid #333;
  } */

`;

export const InputLabelDiv = styled.div`
  display: flex;
`;

export const TextAreaCustom = styled.textarea`
  width: 100%;
  /* height: 150px; */
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
  justify-content: space-between;
  
  background-color: #fff;
  border-radius: 5px;
  padding: 0 20px;
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
