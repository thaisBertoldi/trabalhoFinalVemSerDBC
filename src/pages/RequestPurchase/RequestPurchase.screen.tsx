import { useFormik } from "formik";
import { useEffect, useState } from "react";
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

import { imgConverter, redirectAdmin, maskMoney } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { isLoggedDTO } from "../../models/UserDTO";
import { FaTrashAlt } from "react-icons/fa";
//pagina de compra pro usuário tipo colaborador
const RequestPurchase = ({ profile, auth, dispatch }: any & PurchaseDTO & DispatchProp) => {

  const [arrayItens, setArrayItens] = useState<NewRequestPurchase[]>([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    redirectAdmin(navigate, profile);
  }, [profile]);

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
              onChange={ (e) => maskMoney(e, formik.setFieldValue, "value") }
              value={formik.values.value}
            />

            <div>
              <label htmlFor="profileImage">Envio de Imagem</label>
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
            </div>
            
            <CenterCustom>
              <BtnForm
                width={"300px"}
                color={'#25292a'}
                type="button"
                onClick={() => addItenToList()}
              >
                Adicionar
              </BtnForm>
              <BtnForm
                width={"300px"}
                color={'#25292a'}
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
              <button onClick={ () => handleDeleteItem(index) }> <FaTrashAlt /> </button>
            </DivItens>
          ))  
        }
      </ContainerRequest>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.purchaseReducer.auth,
  profile: state.authReducer
});

export default connect(mapStateToProps)(RequestPurchase);
