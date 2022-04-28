import styled from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  margin: 15px;
  @import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap");
  font-family: "Merriweather Sans", sans-serif;

  span {
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    font-family: "Poppins", sans-serif;
    font-size: 20px;
  }
`;

export const ButtonCustom = styled.button<{ colorHover: string }>`
  border: none;
  font-size: 30px;
  display: flex;
  align-items: center;
  background-color: #e9e9e9;

  :not([disabled]):hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    color: ${(props) => props.colorHover};
  }
`;
