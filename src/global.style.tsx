import styled from "styled-components";
import { Theme } from "./theme";
import image from "./images/background-div.jpg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
`;

export const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background: url(${image}) no-repeat center;
  align-items: center;
  justify-content: center;
  gap: 10%;
  height: 100vh;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Theme.color.white};
  text-shadow: 0.1em 0.1em 0.2em black;
  align-items: center;
  justify-content: center;
  line-height: 5px;
`;

export const Title = styled.h1<{size: string, spacing: string}>`
    font-size: ${props => props.size};
    letter-spacing: ${props => props.spacing};
`;

export const ContainerGetInfo = styled.div`
  width: 600px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 14px;
  box-shadow: 0px 0px 4px 1px ${Theme.color.white};
  background: linear-gradient(
    0.42deg,
    rgba(0, 0, 0, 0.35) 0.39%,
    rgba(0, 0, 0, 0) 101.3%
  );
  backdrop-filter: blur(25px);
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  margin-bottom: 10px;

  border: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom: 2px solid ${Theme.color.white};
  
  background: none;
  color: ${Theme.color.white};
  font-size: ${Theme.fontSize};

  ::placeholder {
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    color: ${Theme.color.white};
    font-size: ${Theme.fontSize};
  }

  :focus {
    outline: none;
  }
`;

export const Btn = styled.button<{width: string}>`
  width: ${(props) => props.width};
  height: 42px;
  background-color: ${props => props.color};
  border-radius: 4px;
  outline: none;
  border: none;
  color: ${Theme.color.white};
`;

export const Paragraph = styled.p`
  font-size: ${Theme.fontSize};
  color: ${Theme.color.white};
  text-align: center;
`;

export const LinkCustom = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: ${Theme.color.primary};
`;

export const DivErrorYup = styled.div`
  color: ${Theme.color.danger}
`;
