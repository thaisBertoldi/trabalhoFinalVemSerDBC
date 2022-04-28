import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { TYPE_USERS } from "../../constants";
import { isLoggedDTO } from "../../models/UserDTO";
import { RootState } from "../../store";

const ItensMenu = ({user}: isLoggedDTO) => {
  return (
    <>
      { user?.profile !== TYPE_USERS.ADMIN && ( <Link to={"/"}>Home</Link> )} 
      { user?.profile === TYPE_USERS.ADMIN && ( <Link to={"/administration"}>Administrador</Link> ) } 
      { user?.profile === TYPE_USERS.COLAB && ( <Link to={"/request-purchase"}>Solicitar compra</Link> )}
    </>
  );
}

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(ItensMenu);