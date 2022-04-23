import { useFormik } from "formik";
import { useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { Btn, Container, InputForm, CenterCustom } from "../../global.style";
import { NewRequestPurchase,PurchaseDTO  } from "../../models/PurchaseDTO";
import api from "../../service/api";
import { RootState } from "../../store";
import { handleCreateList } from "../../store/action/purchaseAction";
import { Theme } from "../../theme";
import {
  ContainerRequest,
  ContainerRequestForm,
  TextAreaCustom,
} from "./RequestPurchase.style";

//pagina de compra pro usuário tipo colaborador
const RequestPurchase = ({ auth, dispatch }: PurchaseDTO & DispatchProp) => {

  const [arrayItens, setArrayItens] = useState<NewRequestPurchase[]>([]);

  const imgConverter = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const profileImage = target.files?.[0];
    formik.setFieldValue("file", profileImage);
  };

  const addItenToList = () => {
    console.log('teste');
    const { itemName, description, value, file } = formik.values;
    const newItem = {
      itemName,
      description,
      value,
      file,
    };
    setArrayItens([...arrayItens, newItem]);
    // formik.resetForm({
      //   values?: { listName: listName, },
      // });
  }

  // const handleCreateList = async (values: PurchaseDTO["auth"]) => {
  //   console.log(values.listName);
  //   try {
  //     const options = {
  //       headers: {"content-type": "application/json"}
  //     }
  //     const { data } = await api.post('topic/create-topic', JSON.stringify(values.listName), options);
  //     postItensToTopic(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const postItensToTopic = async (id: string) => {
  //   arrayItens.forEach( async (item: NewRequestPurchase) => {
  //     const formData = new FormData();
  //     formData.append("file", item.file);
  //     formData.append("description", item.description);
  //     formData.append("name", item.itemName);
  //     formData.append("price", item.value);
     
  //     try {
  //       const { data } = await api.post(`topic/create-item/${id}`, formData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // }

  const formik  = useFormik({
    initialValues: {
      listName: "",
      itemName: "",
      description: "",
      value: "",
      file: "",
    },
    onSubmit: (values) => {
      handleCreateList(values, arrayItens);
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
              onChange={(event) => imgConverter(event)}
            />
            <CenterCustom>
              <Btn width={"300px"} color={Theme.color.yellow} type="button" onClick={ () => addItenToList() } >
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
  auth: state.purchaseReducer.auth,
});

export default connect(mapStateToProps)(RequestPurchase);
