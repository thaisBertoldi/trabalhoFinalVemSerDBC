import { useFormik } from "formik";
import { useState } from "react";
import { connect, DispatchProp } from "react-redux";
import {
  BtnForm,
  Container,
  InputForm,
  CenterCustom,
} from "../../global.style";
import { NewRequestPurchase, PurchaseDTO } from "../../models/PurchaseDTO";
import { RootState } from "../../store";
import { handleCreateList } from "../../store/action/purchaseAction";
import { Theme } from "../../theme";
import {
  ContainerRequest,
  ContainerRequestForm,
  DivItens,
  TextAreaCustom,
} from "./RequestPurchase.style";

import { imgConverter } from "../../utils/utils";
//pagina de compra pro usuário tipo colaborador
const RequestPurchase = ({ auth, dispatch }: PurchaseDTO & DispatchProp) => {
  const [arrayItens, setArrayItens] = useState<NewRequestPurchase[]>([]);

  const addItenToList = () => {
    console.log("teste");
    const { itemName, description, value, file } = formik.values;
    const newItem = {
      itemName,
      description,
      value,
      file,
    };
    formik.resetForm({
      values: {
        listName: formik.values.listName,
        itemName: "",
        description: "",
        value: "",
        file: "",
      },
    });
    setArrayItens([...arrayItens, newItem]);
  };

  const handleDeleteItem = (index: number) => {
    const newArray = arrayItens.filter((item, i) => i !== index);
    setArrayItens(newArray);
  }

  const formik = useFormik({
    initialValues: {
      listName: "",
      itemName: "",
      description: "",
      value: "",
      file: "",
    },
    onSubmit: (values, actions) => {
      handleCreateList(values, arrayItens);
      actions.resetForm({
        values: {
          listName: "",
          itemName: "",
          description: "",
          value: "",
          file: "",
        },
      });
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
              height={"40px"}
              id="listName"
              name="listName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.listName}
            />

            <InputForm
              placeholder="Nome do item"
              width={"100%"}
              height={"40px"}
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
              height={"40px"}
              id="value"
              name="value"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.value}
            />

            <InputForm
              placeholder="Arquivo"
              width={"100%"}
              height={"40px"}
              id="profileImage"
              name="profileImage"
              type="file"
              onChange={(event) =>
                imgConverter(event, formik.setFieldValue, "file")
              }
            />
            
            <CenterCustom>
              <BtnForm
                width={"300px"}
                color={Theme.color.yellow}
                type="button"
                onClick={() => addItenToList()}
              >
                Adicionar
              </BtnForm>
              <BtnForm
                width={"300px"}
                color={Theme.color.grayDark}
                type="submit"
              >
                Finalizar
              </BtnForm>
            </CenterCustom>
          </ContainerRequestForm>
        </form>
        {
          arrayItens.map( (item, index) => (
            <DivItens>
              <p>Nome: {item.itemName}</p>
              <p>Descrição: {item.description}</p>
              <p>Valor: R$ { item.value.replace('.', ',')}</p>
              <button onClick={ () => handleDeleteItem(index) }> Deltar Item </button>
            </DivItens>
          ))  
        }
      </ContainerRequest>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.purchaseReducer.auth,
});

export default connect(mapStateToProps)(RequestPurchase);
