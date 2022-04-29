import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import {
  BtnForm,
  Container,
  InputForm,
  CenterCustom,
  DivErrorYup,
  DivInputFile,
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
  DivTopItens,
  TextAreaCustom,
} from "./RequestPurchase.style";
import { Theme } from "../../theme";

import { imgConverter, maskMoney } from "../../utils/utils";
import { mySchemaPurchase } from "../../utils/yupValidations";
import { useNavigate } from "react-router-dom";
import { isLoggedDTO } from "../../models/UserDTO";
import { FaTrashAlt } from "react-icons/fa";
import { SUPPORTED_FORMATS, FILE_SIZE, TYPE_USERS } from "../../constants";

const RequestPurchase = ({
  user,
  auth,
  dispatch,
}: isLoggedDTO & PurchaseDTO & DispatchProp) => {
  const [arrayItens, setArrayItens] = useState<NewRequestPurchase[]>([]);
  const [idTopic, setIdTopic] = useState(0);
  const [isTopicCreate, setIsTopicCreate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user.profile !== TYPE_USERS.COLAB) {
      navigate("/");
    }
  }, [user]);

  const formikTopic = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Você precisa preencher esse campo"),
    }),
    onSubmit: (valuesTopic) => {
      handleCreateTopic(valuesTopic, setIdTopic, setIsTopicCreate);
    },
  });

  const formik = useFormik({
    initialValues: {
      itemName: "",
      description: "",
      value: "",
      file: "",
      itemId: 0,
    },
    validationSchema: mySchemaPurchase,
    onSubmit: (values) => {
      handleCreateList(
        values,
        idTopic,
        setArrayItens,
        arrayItens,
        formik.resetForm
      );
    },
  });

  return (
    <Container>
      <CenterCustom>
        <h3>Cadastrar compra</h3>
      </CenterCustom>
      <ContainerRequest>
        <ContainerRequestForm>
          {
            !isTopicCreate && (
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
                {formikTopic.errors.title && formikTopic.touched.title ? (
                  <DivErrorYup>{formikTopic.errors.title}</DivErrorYup>
                ) : null}
                
                <BtnForm
                  type="submit"
                  width={"180px"}
                  color={Theme.color.grayDark}
                >
                  Criar tópico
                </BtnForm>
          </form>
            )
          }
          

          {isTopicCreate && (
            <form onSubmit={formik.handleSubmit}>
              <InputForm
                placeholder="Nome do item"
                width={"100%"}
                height={"40px"}
                maxLength={50}
                id="itemName"
                name="itemName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.itemName}
                disabled={idTopic === 0}
              />
              {formik.errors.itemName && formik.touched.itemName ? (
                <DivErrorYup>{formik.errors.itemName}</DivErrorYup>
              ) : null}

              <TextAreaCustom
                placeholder="Descrição"
                rows={5}
                maxLength={255}
                id="description"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                disabled={idTopic === 0}
              />
              {formik.errors.description && formik.touched.description ? (
                <DivErrorYup>{formik.errors.description}</DivErrorYup>
              ) : null}

              <InputForm
                placeholder="Valor do item"
                width={"100%"}
                height={"40px"}
                maxLength={50}
                id="value"
                name="value"
                type="text"
                onChange={(e) => maskMoney(e, formik.setFieldValue, "value")}
                value={formik.values.value}
                disabled={idTopic === 0}
              />
              {formik.errors.value && formik.touched.value ? (
                <DivErrorYup>{formik.errors.value}</DivErrorYup>
              ) : null}

              <DivInputFile>
                <span>Escolha um arquivo</span>
                <input
                  width={"100%"}
                  height={"40px"}
                  id="file"
                  name="file"
                  type="file"
                  onChange={(event) =>
                    imgConverter(event, formik.setFieldValue, "file")
                  }
                />
              </DivInputFile>
              {formik.errors.file && formik.touched.file ? (
                <DivErrorYup>{formik.errors.file}</DivErrorYup>
              ) : null}

              <CenterCustom>
                <BtnForm width={"300px"} color={"#25292a"} type="submit">
                  Adicionar
                </BtnForm>

                <BtnForm
                  width={"300px"}
                  color={"#25292a"}
                  type="button"
                  disabled={arrayItens.length <= 0}
                  onClick={() =>
                    handleFinallyTopic(
                      idTopic,
                      navigate,
                      formikTopic.resetForm,
                      formik.resetForm,
                      setIsTopicCreate
                    )
                  }
                >
                  Finalizar
                </BtnForm>
              </CenterCustom>
            </form>
          )}
        </ContainerRequestForm>

        {
          arrayItens.length && (
          <DivItens>
            <DivTopItens>
              <span> Imagem </span>
              <span> Nome </span>
              <span> Valor </span>
              <span> Ações </span>
            </DivTopItens>
            {
              arrayItens.map((item, index) => (
                <DivTopItens key={index}>
                  <img src={`data:image;base64,${item.file}`} alt="item" />
                  <p>{item.itemName}</p>
                  
                  <p>R$ {item.value}</p>
                  <FaTrashAlt onClick={() => handleDeleteItem(item.itemId, setArrayItens, arrayItens)} />
                </DivTopItens>
              ))
            }
          </DivItens>
          )
        } 
      </ContainerRequest>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.purchaseReducer,
  user: state.authReducer,
});

export default connect(mapStateToProps)<any>(RequestPurchase);
