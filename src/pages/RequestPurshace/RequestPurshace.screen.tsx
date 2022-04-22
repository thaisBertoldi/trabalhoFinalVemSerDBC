import { useFormik } from "formik";
import { connect, DispatchProp } from "react-redux";
import { Container } from "../../global.style";
import { PurshaceDTO } from "../../models/UserDTO";
import { RootState } from "../../store";
import { ContainerRequest, ContainerRequestForm } from "./RequestPurshace.style";

//pagina de compra pro usuário tipo colaborador
const RequestPurshace = ({ auth, dispatch }: PurshaceDTO & DispatchProp) => {
  const formik = useFormik({
    initialValues: {
      listName: "",
      itemName: "",
      value: "",
      file: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <ContainerRequest>
        <form onSubmit={formik.handleSubmit}>
          <ContainerRequestForm>
            <label htmlFor="listName">Título da lista: </label>
            <input
              id="listName"
              name="listName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.listName}
            />
            <label htmlFor="itemName">Nome do item: </label>
            <input
              id="itemName"
              name="itemName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.itemName}
            />
            <label htmlFor="value">Valor do item: </label>
            <input
              id="value"
              name="value"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.value}
            />
            <input
              width="99%"
              height="40px"
              id="profileImage"
              name="profileImage"
              type="file"
              accept="image/*"
              onChange={formik.handleChange}
            />
            <button type="button">Adicionar</button>
            <button type="submit">Finalizar</button>
          </ContainerRequestForm>
        </form>
      </ContainerRequest>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)<any>(RequestPurshace);
