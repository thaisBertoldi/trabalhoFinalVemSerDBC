import { useFormik } from "formik";
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
const Administration = () => {
  const formik = useFormik({
    initialValues: {
      type: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <CenterCustom>
        <h3>Usuários Cadastrados: </h3>
      </CenterCustom>
      {exemplo.users.map((e: any) => {
        return (
          <>
            <form onSubmit={formik.handleSubmit}>
              <UserFormAdmin>
                <DivNameUser>
                  <p>{e.nome}</p>
                </DivNameUser>
                <select name="select">
                  <option value="Colaborador" selected>
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

export default Administration;
