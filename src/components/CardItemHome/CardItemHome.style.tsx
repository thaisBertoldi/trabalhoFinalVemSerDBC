import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 200px;
  padding: 10px;
  gap: 15px;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
`;

export const Desc = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  width: 80%;
  -webkit-box-orient: vertical;
`;

export const CardItemInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardItemValueName = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

export const SpanMoreItens = styled.span`
  margin: 0;
  padding: 10px;
  font-size: 15px;
  opacity: 0.7;
`;