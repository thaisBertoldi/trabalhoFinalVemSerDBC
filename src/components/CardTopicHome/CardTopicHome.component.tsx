import CardItemHome from "../CardItemHome/CardItemHome.component"
import {   ContainerCard,
    TitleCard,
    ButtonCard,
    DivButtonsCard,
    TopicName,
    InfoDataPrice,
    DivStatus,
    DeleteTopic
   } 
    from "./CardTopicHome.style"
import moment from "moment";
import { BiAddToQueue, BiDetail, BiDollarCircle } from "react-icons/bi";
import { MdSegment, MdDateRange } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { ColorEnum, StatusEnum } from "../../enums/StatusEnum";
import { TopicComponentDTO } from "../../models/TopicDTO";
import { ENDPOINT_TOPICS, TYPE_USERS } from "../../constants";
import Notiflix, { Confirm } from "notiflix";
import api from "../../service/api";

const CardTopicHome = ({item, user, setOpenModalQuotation, setOpenModalAddQuotation,  setOpenModalItens}: TopicComponentDTO) =>  {

  const handleDeleteTopic = () => {
    console.log(`${item.topicId}`)
    Confirm.show(
      'Deletar Tópico',
      'Você tem certeza que deseja deletar este tópico?',
      'Sim',
      'Não',
        async () => {
          const {data} = await api.delete(`${ENDPOINT_TOPICS.DELETE_TOPIC}/${item.topicId}`)
          Notiflix.Notify.success(
            `Tópico ${item.title} deletado com sucesso.`
          );
          window.location.reload();
        },
        () => {
          Notiflix.Notify.warning(
            `Operação cancelada.`
          );
        },
      );
  }

  return (
    <ContainerCard key={item.topicId}>
      <TitleCard>
        <TopicName>
          <div>
            <MdSegment />
            <h2>{item.title.toUpperCase()}</h2>
          </div>
          <div>
            { StatusEnum[item.status] === 'Criando' && ( <DeleteTopic onClick={() => handleDeleteTopic()}/> ) }
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
          <GrMoney /> R$ {item.totalValue}
        </p>
      </InfoDataPrice>
      <DivButtonsCard>
        <ButtonCard
          onClick={ () => setOpenModalQuotation({ open: true, id: item.topicId }) }>
          <BiDollarCircle /> Visualizar cotações{" "}
        </ButtonCard>
        { 
          user.profile === TYPE_USERS.BUYER && (
            <ButtonCard
              onClick={ () => setOpenModalAddQuotation({ open: true, id: item.topicId }) }>
              <BiAddToQueue /> Adicionar cotação{" "}
            </ButtonCard>
          )
        }
      </DivButtonsCard>

      <CardItemHome id={item.topicId} />

      <DivButtonsCard>
        <ButtonCard
          onClick={ () => setOpenModalItens({ open: true, id: item.topicId,}) }>
          <BiDetail /> Visualizar todos os itens{" "}
        </ButtonCard>
      </DivButtonsCard>
    </ContainerCard>
  )
}

export default CardTopicHome