import styled from "styled-components";
import { Theme } from "../../theme";

export const ModalAdm = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  padding: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  form {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 25px;
  }

  -webkit-animation: scale-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: scale-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const DivClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 30px;
  color: red;
  cursor: pointer;
`;

export const DivEyeAdm = styled.div`
  font-size: 25px;
  position: absolute;
  right: 30.5%;
  top: 47.1%;
  color: ${Theme.color.black};

  @media (max-width: 668px) {
    right: 30.5%;
    top: 48.1%;
  }
`;

export const InputCreateUserAdm = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid ${Theme.color.grayDark};
  background: none;
  color: ${Theme.color.black};
  font-size: ${Theme.fontSize};

  ::placeholder {
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    font-family: "Poppins", sans-serif;
  }

  :focus {
    outline: none;
  }
`;

export const SelectCreateUserAdm = styled.select`
  width: 100%;
  height: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  font-family: "Poppins", sans-serif;
  border: none;
  border-bottom: 1px solid ${Theme.color.grayDark};
  background: none;
  color: ${Theme.color.black};
  font-size: ${Theme.fontSize};

  :focus {
    outline: none;
  }
`;


