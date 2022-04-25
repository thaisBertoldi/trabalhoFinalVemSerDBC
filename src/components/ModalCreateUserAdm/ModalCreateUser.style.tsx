import styled from "styled-components";

export const ModalAdm = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  form {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 15px;

    @media (max-width: 768px) {
      width: 80%;
    }
  }

  -webkit-animation: scale-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
	        animation: scale-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
			
`;

export const DivClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 30px;
  color: red;
`;
