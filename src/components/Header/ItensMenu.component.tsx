import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { isLoggedDTO } from "../../models/UserDTO";
import { RootState } from "../../store";

const ItensMenu = ({user}: isLoggedDTO) => {
  return (
    <>
      { user?.profile !== 'ADMINISTRATOR' && ( <Link to={"/"}>Home</Link> )} 
      { user?.profile === 'ADMINISTRATOR' && ( <Link to={"/administration"}>Administrador</Link> ) } 
      { user?.profile === 'COLLABORATOR' && ( <Link to={"/request-purchase"}>Solicitar compra</Link> )}
    </>
  );
}

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(ItensMenu);