import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  width: 97%;
  padding: 10px;
  gap: 15px;
  margin: 50px 0;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const CardItemInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardItemValueName = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescP = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
