import styled from "styled-components";
import { Theme } from "../../theme";

export const ContainerAllInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 700px;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-bottom: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const TitleCard = styled.div<{color: string}>`
  background-color: ${props => props.color};
  padding: 10px;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, 1fr);
  }

`;

export const DivButtonsCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 15px;
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

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${Theme.margin};
`;

export const TopicName = styled.div`
  display: flex;
  align-items: center;
  font-size: 50px;
  gap: 15px;

  h2 {
    font-size: 20px;
  }
<<<<<<< HEAD
  p {
    font-size: 15px;
  }
`;

export const InfoDataPrice = styled.div`
  display: flex;
  justify-content: space-around;
`;
=======
`;
>>>>>>> 6b47dac0032f797882b5c415ba91e94f040138bf
