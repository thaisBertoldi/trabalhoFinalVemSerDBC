import { useEffect, useState } from "react";
import { ENDPOINT_TOPICS } from "../../constants";
import api from "../../service/api";
import {
  CardItem,
  ContainerModal,
  Modal,
  BtnClose,
} from "./ModalCardItens.style";
import { AiFillCloseCircle } from "react-icons/ai";
import { ItensInTopicDTO, ModalComponentDTO } from "../../models/ModalsDTO";

const ModalCardItens = ({ id, onClick }: ModalComponentDTO) => {
  const [ItensInTopic, setItensInTopic] = useState<Array<ItensInTopicDTO>>([]);

  const getItensTopic = async (id: number | undefined) => {
    try {
      const { data } = await api.get(
        `${ENDPOINT_TOPICS.GET_ITEMS_TOPIC}/${id}`
      );
      setItensInTopic(data);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getItensTopic(id);
  }, []);

  return (
    <ContainerModal>
      <Modal>
        <BtnClose onClick={onClick}>
          <AiFillCloseCircle />
        </BtnClose>
        {
          ItensInTopic.map((item: ItensInTopicDTO, index: number) => (
            <CardItem key={index}>
              <img
                src={`data:image/jpeg;base64,${item.file}`}
                alt="imagem do iten"
              />
              <p>Nome: {item.itemName.toUpperCase()}</p>
              <p>R$ {item.value}</p>
              <p>{item.description}</p>
            </CardItem>
          ))
        }
      </Modal>
    </ContainerModal>
  );
};

export default ModalCardItens;
