import styled from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  margin: 15px;
  @import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap");
  font-family: "Merriweather Sans", sans-serif;
`;

export const ButtonCustom = styled.button<{ colorHover: string }>`
  border: none;
  font-size: 40px;
  display: flex;
  align-items: center;

  :not([disabled]):hover  {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    color: ${props => props.colorHover};
  }
`;
