import styled from "styled-components";

export const CardItem = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }

  :nth-child(odd) {
    background-color:#D8D8D8;
  }
  :nth-child(even) {
    background-color:#E8E8E8;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;