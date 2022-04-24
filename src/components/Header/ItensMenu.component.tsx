import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ItensMenu = ({auth}: any) => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      { auth?.profile === 'ADMINISTRATOR' && ( <Link to={"/administration"}>Administrador</Link> ) } 
      <Link to={"/request-purchase"}>Solicitar compra</Link>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(ItensMenu);