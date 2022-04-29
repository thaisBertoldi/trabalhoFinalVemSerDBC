import styled from 'styled-components';


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

export const ButtonCard = styled.button`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #393e3f;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 580px) {
    width: 150px;
  } 
`;