import Notiflix from "notiflix";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { ENDPOINT_TOPICS } from "../../constants";
import { NewRequestPurchase, NewRequestPurchaseArray, PurchaseDTO } from "../../models/PurchaseDTO";
import api from "../../service/api";

export const handleCreateTopic = async (valuesTopic: any, setIdTopic: Function) => {
    try {
      Loading.circle();
      const { data } = await api.post(ENDPOINT_TOPICS.CREATE_TOPIC, valuesTopic);
      setIdTopic(data)
      Notiflix.Notify.success(
        `Tópico ${valuesTopic.title} criado com sucesso.`
      );
    } catch (error) {
      console.log(error);
      Loading.remove();
      Notiflix.Notify.failure(
        `Sinto muito, mas nao foi possivel criar o tópico. ${error}`
      );
    }
    Loading.remove();
  }

 export const handleCreateList = async (values: any, id: number, setArrayItens: any, arrayItens: any, formik: Function) => {

      const formData = new FormData();
      formData.append("file", values.file);
      formData.append("description", values.description);
      formData.append("name", values.name);
      formData.append("price", values.price.replace('R$ ', '').replace('.', '').replace(',', '.'));
      setArrayItens([...arrayItens, values])
     
      try {
        Loading.circle();
        const { data } = await api.post(`${ENDPOINT_TOPICS.CREATE_ITEM_TOPIC}/${id}`, formData);
        console.log("item" + data)
        Notiflix.Notify.success(
          `Item ${values.name} adicionado com sucesso.`
        );
        console.log(data)
      } catch (error) {
        console.log(error);
        Notiflix.Notify.failure(
          `Sinto muito, mas nao foi possivel adicionar o item ao tópico. ${error}`
        );
      }
      formik()
    Loading.remove();
  }

  export const handleFinallyTopic = async (id: number) => {
    try {
      Loading.circle();
      const { data } = await api.put(`${ENDPOINT_TOPICS.UPDATE_STATUS}/${id}`);
      console.log(data)
      Notiflix.Notify.success(
        `Tópico finalizado com sucesso.`
      );
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure(
        `Sinto muito, mas nao foi possivel finalizar o tópico. ${error}`
      );
    }
    Loading.remove();
  }

  export const handleDeleteItem = async (id: number) => {
      try {
        Loading.circle();
        const { data } = await api.delete(`${ENDPOINT_TOPICS.DELETE_ITEM}/${id}`);
        console.log(data)
        Notiflix.Notify.success(
          `Item excluído.`
        );
      } catch (error) {
        console.log(error);
        Notiflix.Notify.failure(
          `Sinto muito, mas nao foi possivel excluir esse item. ${error}`
        );
      }
      Loading.remove();
  };