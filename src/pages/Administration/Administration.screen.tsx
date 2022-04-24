import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CenterCustom, Container } from "../../global.style";
import api from "../../service/api";
import { DivNameUser, UserFormAdmin } from "./Administration.style";

//tipá-los
const Administration = ({auth, dispatch}: any) => {

  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([])
  
  const handleProfile = async (values: any) => {
    try {
      const { data } = await api.get(`/admin/adm-set-group-user?groups=${values.type}&idUser=${values.id}`);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
    formik.resetForm();
  }

  const getAllUsers = async () => {
    try {
      const { data } = await api.get("/admin/adm-get-all-users?page=0");
      setAllUsers(data.content)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    if(auth?.profile !== "ADMINISTRATOR") {
      navigate('/')
    }
    getAllUsers()
  },[] )

  const teste = () => {
    console.log('olá')
  }

  const formik = useFormik({
    initialValues: {
      type: "Colaborador",
    },
    onSubmit: (values) => {
      // handleProfile(values);
      console.log('onsubmit do formik')
    },
  });
  return (
    <Container>
      <CenterCustom>
        <h3>Usuários Cadastrados: </h3>
      </CenterCustom>
      {allUsers.map((e: any) => {
        return (
          <>
            <form onSubmit={formik.handleSubmit} key={e.userId}>
              <UserFormAdmin>
                <DivNameUser>
                  <p>{e.fullName}</p>
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
