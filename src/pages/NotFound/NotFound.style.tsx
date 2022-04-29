import styled from "styled-components";

export const ContainerAll = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 890px) {
    width: 90%;
  }
`;

export const ContainerNotFound = styled.div`
  display: grid;
  grid-template-columns: 700px 200px;

  @media (max-width: 890px) {
    grid-template-columns: auto;
    img {
      width: 90%;
    }
  }
`;

export const MessageH2 = styled.h2`
    text-align: center;
`;
