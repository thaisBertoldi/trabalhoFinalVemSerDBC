import CardItemHome from "../CardItemHome/CardItemHome.component"
import {   ContainerCard,
    TitleCard,
    ButtonCard,
    DivButtonsCard,
    TopicName,
    InfoDataPrice,
    DivStatus, } 
    from "./CardTopicHome.style"
import moment from "moment";
import { BiAddToQueue, BiDetail, BiDollarCircle } from "react-icons/bi";
import { MdSegment, MdDateRange } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { ColorEnum, StatusEnum } from "../../enums/StatusEnum";
import { TopicComponentDTO } from "../../models/TopicDTO";

const CardTopicHome = ({item, user, setOpenModalQuotation, setOpenModalAddQuotation,  setOpenModalItens}: TopicComponentDTO) =>  {
  return (
    <ContainerCard key={item.topicId}>
      <TitleCard>
        <TopicName>
          <MdSegment />
          <h2>{item.title.toUpperCase()}</h2>
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
          user.profile === "BUYER" && (
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