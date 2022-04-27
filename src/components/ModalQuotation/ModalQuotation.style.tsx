import styled from 'styled-components';

export const TopModal = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivQuotations = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DivButtons = styled.div`
  display: flex;
`;

export const BtnModalQuotation = styled.button`
  background-color: ${props => props.color};
  height: 50px;
  border-radius: 5px;
  border: none;
  outline: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;