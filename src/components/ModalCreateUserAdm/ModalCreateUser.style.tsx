import styled from "styled-components";
import { Theme } from "../../theme";

export const ModalAdm = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  form {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 15px;
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
`;

export const DivEyeAdm = styled.div`
  font-size: 25px;
  position: absolute;
  /* right: 560px;
  top: 405px; */
  right: 31%;
  top: 48.5%;
  color: ${Theme.color.black};

  @media (max-width: 668px) {
    right: 31%;
    top: 49.7%;
  }
`;
