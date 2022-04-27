import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
  padding: 10px;
  gap: 15px;
  border-bottom: 1px solid #eee;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const CardItemInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardItemValueName = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
