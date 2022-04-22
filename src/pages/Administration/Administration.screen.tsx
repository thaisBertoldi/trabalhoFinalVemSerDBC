import { useFormik } from "formik";
import { Container } from "../../global.style";
import { AdminCenter, UserFormAdmin } from "./Administration.style";

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
      <AdminCenter>
        <h3>Usuários Cadastrados: </h3>
      </AdminCenter>
      {exemplo.users.map((e: any) => {
        return (
          <>
            <form onSubmit={formik.handleSubmit}>
              <UserFormAdmin>
                <p>{e.nome}</p>
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
