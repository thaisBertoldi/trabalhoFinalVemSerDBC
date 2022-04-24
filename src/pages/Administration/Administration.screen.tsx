import { useFormik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CenterCustom, Container } from "../../global.style";
import { DivNameUser, UserFormAdmin } from "./Administration.style";

const exemplo = {
  users: [
    {
      nome: "Fulano",
    },
    {
      nome: "Pedro",
    },
    {
      nome: "João",
    },
    {
      nome: "Tiago",
    },
  ],
};

//tipá-los
const Administration = ({auth, dispatch}: any) => {

  const navigate = useNavigate();
  
  const test = (values: any) => {
    //post
    alert(JSON.stringify(values, null, 2));
    formik.resetForm();
  }

  useEffect( () => {
    if(auth?.profile !== "ADMINISTRATOR") {
      navigate('/')
    }
    
  },[] )

  const formik = useFormik({
    initialValues: {
      type: "Colaborador",
    },
    onSubmit: (values) => {
      test(values);
    },
  });
  return (
    <Container>
      <CenterCustom>
        <h3>Usuários Cadastrados: </h3>
      </CenterCustom>
      {exemplo.users.map((e: any, index: number) => {
        return (
          <>
            <form onSubmit={formik.handleSubmit} key={index}>
              <UserFormAdmin>
                <DivNameUser>
                  <p>{e.nome}</p>
                </DivNameUser>
                <select
                  name="type"
                  onChange={formik.handleChange}
                >
                  <option value="Colaborador">
                    Colaborador
                  </option>
                  <option value="Administrador">Administrador</option>
                  <option value="Comprador">Comprador</option>
                  <option value="Gestor">Gestor</option>
                  <option value="Financeiro">Financeiro</option>
                </select>
                <button type="submit">Submit</button>
              </UserFormAdmin>
            </form>
          </>
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(Administration);
