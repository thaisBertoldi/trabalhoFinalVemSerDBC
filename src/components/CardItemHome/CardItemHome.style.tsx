import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
  padding: 10px;
  gap: 15px;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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

export const LoadingItem = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
