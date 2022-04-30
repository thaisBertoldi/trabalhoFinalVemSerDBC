import styled from 'styled-components';
import { Theme } from "../../theme";

export const CardUSerAdmin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  gap: 15px;
  justify-content: center;
  background-color: white;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 0px 1px 31px 9px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 1px 31px 9px rgba(105, 105, 105, 0.46);
  }
  select {
    width: 60%;
    padding: 5px;
    font-size: 14px;
    color: #25292a;
    border: none;
    border-bottom: 2px solid #25292a;
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    font-family: "Poppins", sans-serif;
  }
`;

export const ImageUser = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const DivImage = styled.div`
  width: 100px;
  height: 100px;
`;

export const DataUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnAdm = styled.button<{
  width: string;
  color: string;
  background: string;
}>`
  width: ${(props) => props.width};
  height: 42px;
  background: ${(props) => props.background};
  border-radius: 14px;
  outline: none;
  border: none;
  color: ${(props) => props.color};
  font-size: 14px;
  cursor: pointer;

  :hover {
    background: ${Theme.color.grayDark};
    color: ${Theme.color.white};
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  font-family: "Poppins", sans-serif;
`;