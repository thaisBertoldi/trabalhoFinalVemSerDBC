import Notiflix from "notiflix";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { NewRequestPurchase, NewRequestPurchaseArray, PurchaseDTO } from "../../models/PurchaseDTO";
import api from "../../service/api";

export const handleCreateList = async (values: PurchaseDTO["auth"], arrayItens: NewRequestPurchaseArray['item']) => {
    console.log(values.listName);
    try {
      Loading.circle();
      const options = {
        headers: {"content-type": "application/json"}
      }
      const { data } = await api.post('topic/create-topic', JSON.stringify(values.listName), options);
      postItensToTopic(data, arrayItens);
    } catch (error) {
      console.log(error);
      Loading.remove();
    }
  }

 export const postItensToTopic = async (id: string, arrayItens: NewRequestPurchaseArray['item']) => {
    arrayItens.forEach( async (item: NewRequestPurchase) => {
      const formData = new FormData();
      formData.append("file", item.file);
      formData.append("description", item.description);
      formData.append("name", item.itemName);
      formData.append("price", item.value);
     
      try {
        const { data } = await api.post(`topic/create-item/${id}`, formData);
      } catch (error) {
        console.log(error);
      }
    });
    Loading.remove();
  }