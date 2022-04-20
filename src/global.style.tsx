import styled from "styled-components";
import { Theme } from "./theme";
import image from "./images/dbc-background.jpg";
import { Link } from "react-router-dom";

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
  width: 395px;
  height: 562px;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  box-shadow: 0px 0px 4px 1px ${Theme.color.white};
  background: linear-gradient(
    0.42deg,
    rgba(0, 0, 0, 0.35) 0.39%,
    rgba(0, 0, 0, 0) 101.3%
  );
  backdrop-filter: blur(35px);
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${Theme.color.white};
  ::placeholder {
    font-family: ${Theme.fontFamily};
    color: ${Theme.color.white};
    font-size: ${Theme.fontSize};
  }
  background: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${Theme.color.white};
  font-size: ${Theme.fontSize};
`;

export const Btn = styled.button`
  background-color: ${Theme.color.primary};
  width: 322px;
  height: 42px;
  border-radius: 4px;
  outline: none;
  border: none;
  color: ${Theme.color.white};
`;

export const Paragraph = styled.p`
    font-size: ${Theme.fontSize};
    color: ${Theme.color.white};
`;

export const LinkCustom = styled(Link)`
    list-style: none;
    text-decoration: none;
    color: ${Theme.color.primary};
`;
