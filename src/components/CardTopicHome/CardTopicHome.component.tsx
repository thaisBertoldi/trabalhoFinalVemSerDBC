import moment from "moment";
import Notiflix, { Confirm } from "notiflix";
import { GrMoney } from "react-icons/gr";
import { MdSegment, MdDateRange } from "react-icons/md";
import { BiAddToQueue, BiDetail, BiDollarCircle } from "react-icons/bi";
import CardItemHome from "../CardItemHome/CardItemHome.component";
import {
  TitleCard,
  TopicName,
  DivStatus,
  ButtonCard,
  DeleteTopic,
  InfoDataPrice,
  ContainerCard,
  DivButtonsCard,
} from "./CardTopicHome.style";
import api from "../../service/api";
import { ColorEnum, StatusEnum } from "../../enums/StatusEnum";
import { TopicComponentDTO } from "../../models/TopicDTO";
import { ENDPOINT_TOPICS, TYPE_USERS } from "../../constants";
<<<<<<< HEAD
=======
import Notiflix, { Confirm } from "notiflix";
import api from "../../service/api";
import { maskMoneyHTML } from "../../utils/utils";

const CardTopicHome = ({item, user, setOpenModalQuotation, setOpenModalAddQuotation,  setOpenModalItens}: TopicComponentDTO) =>  {
>>>>>>> 3b1981c1a5c17d2191912e2d46ffdb68c85bc18e

const CardTopicHome = ({
  item,
  user,
  setOpenModalQuotation,
  setOpenModalAddQuotation,
  setOpenModalItens,
}: TopicComponentDTO) => {
  const handleDeleteTopic = () => {
    Confirm.show(
      "Deletar Tópico",
      "Você tem certeza que deseja deletar este tópico?",
      "Sim",
      "Não",
      async () => {
        const { data } = await api.delete(
          `${ENDPOINT_TOPICS.DELETE_TOPIC}/${item.topicId}`
        );
        Notiflix.Notify.success(`Tópico ${item.title} deletado com sucesso.`);
        window.location.reload();
      },
      () => {
        Notiflix.Notify.warning(`Operação cancelada.`);
      }
    );
  };

  return (
    <ContainerCard key={item.topicId}>
      <TitleCard>
        <TopicName>
          <div>
            <MdSegment />
            <h2>{item.title.toUpperCase()}</h2>
          </div>
          <div>
            {StatusEnum[item.status] === "Criando" && (
              <DeleteTopic onClick={() => handleDeleteTopic()} />
            )}
          </div>
        </TopicName>
        <DivStatus color={ColorEnum[item.status]}>
          <span>Status: {StatusEnum[item.status]}</span>
        </DivStatus>
      </TitleCard>
      <InfoDataPrice>
        <p>
          <MdDateRange /> {moment(item.date).format("DD/MM/YYYY")}
        </p>
        <p>
          <GrMoney /> {maskMoneyHTML(item.totalValue)}
        </p>
      </InfoDataPrice>
      <DivButtonsCard>
        <ButtonCard
          onClick={() =>
            setOpenModalQuotation({ open: true, id: item.topicId })
          }
        >
          <BiDollarCircle /> Visualizar cotações
        </ButtonCard>
        {user.profile === TYPE_USERS.BUYER && (
          <ButtonCard
            onClick={() =>
              setOpenModalAddQuotation({ open: true, id: item.topicId })
            }
          >
            <BiAddToQueue /> Adicionar cotação
          </ButtonCard>
        )}
      </DivButtonsCard>

      <CardItemHome id={item.topicId} />

      <DivButtonsCard>
        <ButtonCard
          onClick={() => setOpenModalItens({ open: true, id: item.topicId })}
        >
          <BiDetail /> Visualizar todos os itens
        </ButtonCard>
      </DivButtonsCard>
    </ContainerCard>
  );
};

export default CardTopicHome;
