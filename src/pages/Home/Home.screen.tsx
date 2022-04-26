import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CenterCustom, Container, InputForm } from "../../global.style";
import { isLoggedDTO } from "../../models/UserDTO";
import moment from "moment";

import { BiAddToQueue, BiDetail, BiDollarCircle } from "react-icons/bi";
import { MdSegment } from "react-icons/md";

import { RootState } from "../../store";
import { redirectAdmin, redirectToLogin } from "../../utils/utils";
import {
  ContainerCard,
  TitleCard,
  ButtonCard,
  DivButtonsCard,
  DivSearch,
  TopicName,
} from "./Home.style";

import { ModalBuyer, ModalCotation } from "../../components";
import { ColorEnum, StatusEnum } from "../../enums/StatusEnum";
import { getTopics } from "../../store/action/topicActions";
import CardHome from "../../components/CardHome/CardHome.component";
import { ModalDTO } from "../../models/ModalsDTO";
import { IconSearch } from "../../global.style";
import Pagination from "../../components/Pagination/Pagination";

//listas apenas do colaborador se for usuario tipo colaborador
//lista geral com botao de aprovar ou reprovar pro gestor se tiver mais de duas cotacoes
//lista geral com botao de aprovar ou reprovar pro financeiro se o gestor tiver aprovado
//lista geral pro comprador com modal pra solicitar cotacao

const Home = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();
  const hasUser: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasUser);

  const [listTopics, setListTopics] = useState<any>([]);
  const [allPages, setAllPages] = useState<number>(0);
  const [page, setPage] = useState<number>(0)

  const [OpenModalAddCotation, setOpenModalAddCotation] = useState<ModalDTO>({
    open: false,
    id: 0,
  });

  const [OpenModalCotation, setOpenModalCotation] = useState<ModalDTO>({
    open: false,
    id: 0,
  });

  const [showItensTopic, setShowItensTopic] = useState<ModalDTO>({
    open: false,
    id: 0,
  });

  const changePage = (index: number) => {
    setPage(index)
}

  // console.log(showItensTopic);

  useEffect(() => {
    redirectToLogin(navigate);
    redirectAdmin(navigate, user.profile);
  }, [user]);

  useEffect(() => {
    getTopics(
      setListTopics,
      setAllPages,
      page,
    );
  },[page])

  return (
    <Container>
      <CenterCustom>
        <h1>Seja bem-vindo(a), {User?.fullName}</h1>
      </CenterCustom>
      <DivSearch>
        <InputForm
          width={"50%"}
          height={"40px"}
          placeholder="Pesquisar"
          // onChange={(event) => handleUserSearch(event.target.value)}
        ></InputForm>
        <IconSearch />
      </DivSearch>
      {listTopics?.content?.map((item: any) => (
        <ContainerCard key={item.topicId}>
          <TitleCard color={ColorEnum[item.status]}>
            <TopicName>
              <MdSegment />
              <h2>{item.title.toUpperCase()}</h2>
            </TopicName>
            <p>Data: {moment(item.date).format("DD/MM/YYYY")}</p>
            <p>Valor total: R$ {item.totalValue}</p>
            <p>Status: {StatusEnum[item.status]}</p>
          </TitleCard>
          <DivButtonsCard>
            <ButtonCard
              onClick={() =>
                setShowItensTopic({
                  open: !showItensTopic.open,
                  id: item.topicId,
                })
              }
            >
              <BiDetail /> Visualizar Itens do tópico{" "}
            </ButtonCard>
            <ButtonCard
              onClick={() =>
                setOpenModalCotation({ open: true, id: item.topicId })
              }
            >
              <BiDollarCircle /> Visualizar cotações{" "}
            </ButtonCard>
            <ButtonCard
              onClick={() =>
                setOpenModalAddCotation({ open: true, id: item.topicId })
              }
            >
              <BiAddToQueue /> Adicionar cotação{" "}
            </ButtonCard>
          </DivButtonsCard>
          {showItensTopic.open && showItensTopic.id === item.topicId && (
            <CardHome id={item.topicId} />
          )}
        </ContainerCard>
      ))}

      {OpenModalAddCotation.open && (
        <ModalBuyer
          id={OpenModalAddCotation.id}
          onClick={() => setOpenModalAddCotation({ open: false })}
        />
      )}
      {OpenModalCotation.open && (
        <ModalCotation
          id={OpenModalCotation.id}
          onClick={() => setOpenModalCotation({ open: false })}
        />
      )}
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={allPages}
        pageCount={pageCount}
        previousLabel="< previous"
      /> */}
      <Pagination page={page} onPageChange={changePage} allPages={allPages} />
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Home);
