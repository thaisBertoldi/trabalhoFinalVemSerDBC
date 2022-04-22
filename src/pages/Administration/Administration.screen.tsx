import { Container } from "../../global.style";

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
  return (
    <Container>
      <h3>Usuários Cadastrados: </h3>
      {exemplo.users.map((e: any) => {
        return (
          <>
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
            <button type="submit">Cadastrar tipo</button>
          </>
        );
      })}
    </Container>
  );
};

export default Administration;
