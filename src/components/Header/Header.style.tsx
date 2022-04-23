import styled from 'styled-components';
import { Theme } from "../../theme";


export const HeaderNav = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${Theme.color.primary};

  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

export const UlNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  padding-right: 20px;

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

  a {
    color: #DDE2FF;
    text-decoration: none;
  }

  a:hover {
    background-color: #9fa2b436 ;
    border-bottom: 3px solid  #DDE2FF;
  }

  button {
    width: 100px;
    height: 50px;
    background: #FF505A;
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

export const DivArrow = styled.div`
  position: absolute;
  top: 5%;
  right: 2.5%;
  font-size: 30px;
  color: white;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 7.5%;
  right: 0%;
  width: 100px;
  transform: translateX(-45%);
`;
