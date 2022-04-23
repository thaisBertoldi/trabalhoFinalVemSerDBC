import { useFormik } from "formik";
import { connect, DispatchProp } from "react-redux";
import { Btn, Container, InputForm, CenterCustom } from "../../global.style";
import { PurshaceDTO } from "../../models/UserDTO";
import { RootState } from "../../store";
import { Theme } from "../../theme";
import {
  ContainerRequest,
  ContainerRequestForm,
  InputLabelDiv,
  TextAreaCustom,
} from "./RequestPurshace.style";

//pagina de compra pro usuário tipo colaborador
const RequestPurshace = ({ auth, dispatch }: PurshaceDTO & DispatchProp) => {
  const formik = useFormik({
    initialValues: {
      listName: "",
      itemName: "",
      description: "",
      value: "",
      file: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <CenterCustom>
        <h3>Cadastrar compra</h3>
      </CenterCustom>
      <ContainerRequest>
        <form onSubmit={formik.handleSubmit}>
          <ContainerRequestForm>
            <InputForm
              placeholder="Título da lista"
              width={"100%"}
              height={"30px"}
              id="listName"
              name="listName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.listName}
            />

            <InputForm
              placeholder="Nome do item"
              width={"100%"}
              height={"30px"}
              id="itemName"
              name="itemName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.itemName}
            />

            <TextAreaCustom
              placeholder="Descrição"
              rows={10}
              id="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />

            <InputForm
              placeholder="Valor do item"
              width={"100%"}
              height={"30px"}
              id="value"
              name="value"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.value}
            />

            <InputForm
              placeholder="Arquivo"
              width={"100%"}
              height={"30px"}
              id="profileImage"
              name="profileImage"
              type="file"
              accept="image/*"
              onChange={formik.handleChange}
            />
            <CenterCustom>
              <Btn width={"300px"} color={Theme.color.yellow} type="button">
                Adicionar
              </Btn>
              <Btn width={"300px"} color={Theme.color.grayDark} type="submit">
                Finalizar
              </Btn>
            </CenterCustom>
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
