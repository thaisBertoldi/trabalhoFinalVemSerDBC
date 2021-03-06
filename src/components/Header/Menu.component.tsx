import { useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Hamburguer from "./Hamburguer.component";
import ItensMenu from "./ItensMenu.component";
import {
  UlNav,
  DivArrow,
  DropDown,
  DivUserMenu,
  DivLinksMenu,
  MenuHamburguer,
  ParagraphNameUser,
} from "./Header.style";
import { handleLogout } from "../../store/action/authActions";
import { DefaultImage } from "../../constants";
import { RootState } from "../../store";
import { isLoggedDTO } from "../../models/UserDTO";

const Menu = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [openHamburguer, setOpenHamburguer] = useState<boolean>(false);

  const hasUser: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasUser);

  return (
    <UlNav>
      <MenuHamburguer>
        <MdMenu onClick={() => setOpenHamburguer(!openHamburguer)} />
      </MenuHamburguer>
      {openHamburguer && <Hamburguer />}

      <DivLinksMenu>
        <ItensMenu />
      </DivLinksMenu>

      <DivUserMenu>
        <ParagraphNameUser> {User?.fullName} </ParagraphNameUser>
        <figure onClick={() => setOpen(!open)}>
          <img
            src={`data:image/jpeg;base64,${User?.profileImage ?? DefaultImage}`}
            alt="Foto do usuário"
          />
          <DivArrow>
            <IoMdArrowDropdown />
          </DivArrow>
        </figure>
      </DivUserMenu>

      {open && (
        <DropDown>
          <button onClick={() => handleLogout(dispatch, navigate)}>
            Logout
          </button>
        </DropDown>
      )}
    </UlNav>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Menu);
