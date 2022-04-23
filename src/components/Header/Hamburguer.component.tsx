import { Link } from "react-router-dom";
import { HamburguerDiv } from "./Header.style";

const Hamburguer = () => {
  return (
    <HamburguerDiv>
      <Link to={"/"}>Home</Link>
      <Link to={"/administration"}>Administrador</Link>
      <Link to={"/request-purchase"}>Solicitar compra</Link>
    </HamburguerDiv>
  );
}

export default Hamburguer;