import { Link } from "react-router-dom";
import { HamburguerDiv } from "./Header.style";
import ItensMenu from "./ItensMenu.component";

const Hamburguer = () => {
  return (
    <HamburguerDiv>
      <ItensMenu />
    </HamburguerDiv>
  );
}

export default Hamburguer;