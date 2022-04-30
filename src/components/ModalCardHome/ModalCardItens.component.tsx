import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ENDPOINT_TOPICS } from "../../constants";
import api from "../../service/api";
import {
  CardItem,
} from "./ModalCardItens.style";
import { ContainerModal, BtnClose, Modal } from '../globalStyleComponents.style';
import { ItensInTopicDTO, ModalComponentDTO } from "../../models/ModalsDTO";
import { maskMoneyHTML } from "../../utils/utils";

const ModalCardItens = ({ id, onClick }: ModalComponentDTO) => {
  const [ItensInTopic, setItensInTopic] = useState<Array<ItensInTopicDTO>>([]);

  const getItensTopic = async (id: number | undefined) => {
    try {
      const { data } = await api.get(
        `${ENDPOINT_TOPICS.GET_ITEMS_TOPIC}/${id}`
      );
      setItensInTopic(data);
    } catch (error) {
      console.log(error);
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
              <p>{maskMoneyHTML(item.value)}</p>
              <p>{item.description}</p>
            </CardItem>
          ))
        }
      </Modal>
    </ContainerModal>
  );
};

export default ModalCardItens;
