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

  @media (max-width: 768px) {
    p {
      font-size: 12px;
    }
  }
`;

export const Modal = styled.div`
  width: 70%;
  max-height: 80%;
  margin: 0 auto;
  
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  
  overflow-y: scroll;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
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