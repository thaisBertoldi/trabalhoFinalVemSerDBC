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
import {
  handleCreateList,
  handleCreateTopic,
  handleDeleteItem,
  handleFinallyTopic,
} from "../../store/action/purchaseAction";
import {
  ContainerRequest,
  ContainerRequestForm,
  DivItens,
  TextAreaCustom,
} from "./RequestPurchase.style";

import { imgConverter, maskMoney } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { isLoggedDTO } from "../../models/UserDTO";
import { FaTrashAlt } from "react-icons/fa";
const RequestPurchase = ({user,auth,dispatch,}: isLoggedDTO & PurchaseDTO & DispatchProp) => {

  const [arrayItens, setArrayItens] = useState<NewRequestPurchase[]>([]);
  const [idTopic, setIdTopic] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if(user.profile !== "COLLABORATOR"){
      navigate("/");
    }
  }, [user]);

  const formikTopic = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (valuesTopic) => {
      handleCreateTopic(valuesTopic, setIdTopic);
    },
  });

  const formik = useFormik({
    initialValues: {
      itemName: "",
      description: "",
      price: "",
      file: "",
      itemId: 0,
    },
    onSubmit: (values, actions) => {
      handleFinallyTopic(idTopic, navigate);
      formikTopic.resetForm();
      actions.resetForm();
    },
  });

  return (
    <Container>
      <CenterCustom>
        <h3>Cadastrar compra</h3>
      </CenterCustom>
      <ContainerRequest>
        <ContainerRequestForm>
          <form onSubmit={formikTopic.handleSubmit}>
            <InputForm
              placeholder="Título da lista"
              width={"100%"}
              height={"40px"}
              id="title"
              name="title"
              type="text"
              onChange={formikTopic.handleChange}
              value={formikTopic.values.title}
            />
            <button type="submit" > Criar tópico </button>
          </form>

          <form onSubmit={formik.handleSubmit}>
            <InputForm
              placeholder="Nome do item"
              width={"100%"}
              height={"40px"}
              id="itemName"
              name="itemName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.itemName}
              disabled={idTopic === 0}
            />

            <TextAreaCustom
              placeholder="Descrição"
              rows={5}
              id="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              disabled={idTopic === 0}
            />

            <InputForm
              placeholder="Valor do item"
              width={"100%"}
              height={"40px"}
              id="price"
              name="price"
              type="text"
              onChange={ (e) => maskMoney(e, formik.setFieldValue, "price") }
              value={formik.values.price}
              disabled={idTopic === 0}
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
                color={"#25292a"}
                type="button"
                onClick={() =>
                  handleCreateList(
                    formik.values,
                    idTopic,
                    setArrayItens,
                    arrayItens,
                    formik.resetForm
                  )
                }
              >
                Adicionar
              </BtnForm>
              <BtnForm width={"300px"} color={"#25292a"} type="submit">
                Finalizar
              </BtnForm>
            </CenterCustom>
          </form>
        </ContainerRequestForm>
        {arrayItens.map((item, index) => (
          <DivItens key={index}>
            <img src={`data:image/jpeg;base64,${item.file}`} alt="imagem do item"/>
            <p>Nome: {item.itemName}</p>
            <p>Descrição: {item.description}</p>
            <p>Valor: R$ {item.price}</p>
            <p>Id: {item.itemId}</p>
            <FaTrashAlt onClick={() => handleDeleteItem(item.itemId, setArrayItens, arrayItens)} />
          </DivItens>
        ))}
      </ContainerRequest>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.purchaseReducer,
  user: state.authReducer,
});

export default connect(mapStateToProps)<any>(RequestPurchase);
