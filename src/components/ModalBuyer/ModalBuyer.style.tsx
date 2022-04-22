import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  bottom: 0;
`;

export const Modal = styled.div`
  width: 80%;

  margin: 0 auto;

  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
