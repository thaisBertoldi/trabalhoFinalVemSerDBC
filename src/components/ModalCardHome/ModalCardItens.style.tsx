import styled from "styled-components";

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
  width: 40%;

  margin: 0 auto;

  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  form {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;
    gap: 15px;

    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;
export const CardItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
`;
export const BtnClose = styled.button`
  width: 25px;
  height: 25px;
  margin-left: 95%;
  
  font-size: 25px;

  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: 840px) {
    margin-left: 90%;
  }
`;