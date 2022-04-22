import { useFormik } from "formik";
import { connect, DispatchProp } from "react-redux";
import { Btn, Container, InputForm } from "../../global.style";
import { PurshaceDTO } from "../../models/UserDTO";
import { RootState } from "../../store";
import { Theme } from "../../theme";
import {
  ContainerRequest,
  ContainerRequestForm,
  InputLabelDiv,
  RequestCenter,
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
      <RequestCenter>
        <h3>Cadastrar compra</h3>
      </RequestCenter>
      <ContainerRequest>
        <form onSubmit={formik.handleSubmit}>
          <ContainerRequestForm>
            <InputLabelDiv>
              <label htmlFor="listName">Título da lista: </label>
              <InputForm
                id="listName"
                name="listName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.listName}
              />
            </InputLabelDiv>

            <InputLabelDiv>
              <label htmlFor="itemName">Nome do item: </label>
              <InputForm
                id="itemName"
                name="itemName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.itemName}
              />
            </InputLabelDiv>

            
            <InputLabelDiv>
              <label htmlFor="description">Descrição: </label>
              <TextAreaCustom
              placeholder="Something in here"
              rows={10}
                id="description"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              ></TextAreaCustom>
            </InputLabelDiv>

            <InputLabelDiv>
              <label htmlFor="value">Valor do item: </label>
              <InputForm
                id="value"
                name="value"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.value}
              />
            </InputLabelDiv>

            <InputForm
              width="99%"
              height="40px"
              id="profileImage"
              name="profileImage"
              type="file"
              accept="image/*"
              onChange={formik.handleChange}
            />
            <RequestCenter>
              <Btn width={"300px"} color={Theme.color.yellow} type="button">
                Adicionar
              </Btn>
              <Btn width={"300px"} color={Theme.color.grayDark} type="submit">
                Finalizar
              </Btn>
            </RequestCenter>
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
