import styled from "styled-components";
import { Theme } from "../../theme";

export const HeaderNav = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${Theme.color.black};
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DivLinksMenu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 30px;

  a {
    color: #dde2ff;
    text-decoration: none;
  }

  a:hover {
    background-color: #9fa2b436;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UlNav = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;


  figure {
    width: 60px;
    height: 60px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  button {
    width: 100px;
    height: 50px;
    background: #ff505a;
    color: white;

    box-shadow: 0px 4px 12px ${Theme.color.grayDark};
    border-radius: 8px;
    border: none;
    outline: none;
  }

  button:hover {
    cursor: pointer;
    background: #ff2e39;
  }
`;

export const MenuHamburguer = styled.div`
  color: white;
  font-size: 20px;
  padding-left: 20px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const HamburguerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${Theme.color.black};
  position: absolute;
  top: 8%;

  a {
    color: #dde2ff;
    text-decoration: none; 
    padding: 10px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DivArrow = styled.div`
  position: fixed;
  top: 5%;
  right: 1.5%;
  font-size: 30px;
  color: white;
`;

export const DivUserMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const DropDown = styled.div`
  position: absolute;
  bottom: -65%;
  right: 1.5%;

`;

export const ParagraphNameUser = styled.p`
  color: #dde2ff;
  padding-left: 30px;
`;
