import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UlNav, DropDown, DivArrow, DivLinksMenu, ParagraphNameUser, DivUserMenu, MenuHamburguer, HamburguerDiv } from "./Header.style";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { handleLogout } from "../../store/action/authActions";

import ImgDefault from "../../images/foto-perfil.png";
import { useState } from "react";

const Menu = ({ auth, dispatch }: any) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [openHamburguer, setOpenHamburguer] = useState<boolean>(false);

  const hasUser: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasUser);
  console.log(User);

  return (
    <UlNav>
      <MenuHamburguer>
        <MdMenu onClick={() => setOpenHamburguer(!openHamburguer)} />
      </MenuHamburguer>
      {
        openHamburguer && (
        <HamburguerDiv>
          <Link to={"/"}>Home</Link>
          <Link to={"/administration"}>Administrador</Link>
          <Link to={"/request-purchase"}>Solicitar compra</Link>
        </HamburguerDiv>
        )
      }
      <DivLinksMenu>
        <Link to={"/"}>Home</Link>
        <Link to={"/administration"}>Administrador</Link>
        <Link to={"/request-purchase"}>Solicitar compra</Link>
      </DivLinksMenu>
      <DivUserMenu>
        <ParagraphNameUser> {User?.fullName} </ParagraphNameUser>
        <figure onClick={() => setOpen(!open)}>
          <img
            src={
              User?.profileImage !== null
                ? `data:image/jpeg;base64,${User?.profileImage}`
                : ImgDefault
            }
            alt="Foto do usuário"
          />
          <DivArrow>
            <IoMdArrowDropdown />
          </DivArrow>
        </figure>
        {open && (
          <DropDown>
            <button onClick={() => handleLogout(dispatch, navigate)}>
              {" "}
              Logout{" "}
            </button>
          </DropDown>
        )}
      </DivUserMenu>
    </UlNav>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Menu);
