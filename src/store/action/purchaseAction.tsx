import Notiflix from "notiflix";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { ENDPOINT_TOPICS } from "../../constants";
import { NewRequestPurchase, TitlePurchaseDTO } from "../../models/PurchaseDTO";
import api from "../../service/api";
import { removeMaskMoney } from "../../utils/utils";

export const handleCreateTopic = async (
  valuesTopic: TitlePurchaseDTO,
  setIdTopic: Function
) => {
  try {
    Loading.circle();
    const { data } = await api.post(ENDPOINT_TOPICS.CREATE_TOPIC, valuesTopic);
    setIdTopic(data);
    Notiflix.Notify.success(`Tópico ${valuesTopic.title} criado com sucesso.`);
  } catch (error) {
    console.log(error);
    Loading.remove();
    Notiflix.Notify.failure(
      `Sinto muito, mas nao foi possivel criar o tópico. ${error}`
    );
  }
  Loading.remove();
};

export const handleCreateList = async (
  values: NewRequestPurchase,
  idTopic: number,
  setArrayItens: Function,
  arrayItens: Array<NewRequestPurchase>,
  formik: Function,
) => {

    const formData = new FormData();
    formData.append("file", values.file);
    formData.append("description", values.description);
    formData.append("name", values.itemName);
    formData.append("price", removeMaskMoney(values.price));

    try {
      Loading.circle();
      const { data } = await api.post(
        `${ENDPOINT_TOPICS.CREATE_ITEM_TOPIC}/${idTopic}`,
        formData
      );
      setArrayItens([...arrayItens, data]);
      Notiflix.Notify.success(
        `Item ${values.itemName} adicionado com sucesso.`
      );
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure(
        `Sinto muito, mas nao foi possivel adicionar o item ao tópico. ${error}`
      );
    }
    formik({
      values: {
        itemName: "",
        description: "",
        price: "",
        file: values.file,
      },
    });
  

  Loading.remove();
};

export const handleFinallyTopic = async (
  idItem: number,
  navigate: Function,
  formikTopicReset: Function, 
  formikReset: Function
) => {
  try {
    Loading.circle();
    const { data } = await api.put(
      `${ENDPOINT_TOPICS.UPDATE_STATUS}/${idItem}`
    );
    console.log(data);
    Notiflix.Notify.success(`Tópico finalizado com sucesso.`);
    navigate("/");
    formikReset()
    formikTopicReset()
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      `Sinto muito, mas nao foi possivel finalizar o tópico. ${error}`
    );
  }
  Loading.remove();
};

export const handleDeleteItem = async (
  id: number,
  setArrayItens: Function,
  arrayItens: Array<NewRequestPurchase>
) => {
  try {
    Loading.circle();
    const { data } = await api.delete(`${ENDPOINT_TOPICS.DELETE_ITEM}/${id}`);
    console.log(data);
    Notiflix.Notify.success(`Item excluído.`);
    const arrayItensFilter = arrayItens.filter((item) => {
      if (item.itemId !== id) {
        return item;
      }
    });
    setArrayItens(arrayItensFilter);
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      `Sinto muito, mas nao foi possivel excluir esse item. ${error}`
    );
  }
  Loading.remove();
};
