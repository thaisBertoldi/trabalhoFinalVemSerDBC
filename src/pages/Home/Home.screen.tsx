import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CenterCustom, Container, InputForm } from "../../global.style";
import { isLoggedDTO } from "../../models/UserDTO";
import moment from "moment";

import { BiAddToQueue, BiDetail, BiDollarCircle } from "react-icons/bi";
import { MdSegment, MdDateRange } from "react-icons/md";
import { GrMoney } from "react-icons/gr";

import { RootState } from "../../store";
import { redirectAdmin, redirectToLogin } from "../../utils/utils";
import {
  ContainerCard,
  TitleCard,
  ButtonCard,
  DivButtonsCard,
  DivSearch,
  TopicName,
  ContainerAllInfo,
  InfoDataPrice,
} from "./Home.style";

import { ModalBuyer, ModalCardItens, ModalCotation, Pagination } from "../../components";
import { ColorEnum, StatusEnum } from "../../enums/StatusEnum";
import { getTopics } from "../../store/action/topicActions";
import CardHome from "../../components/CardHome/CardHome.component";
import { ModalDTO } from "../../models/ModalsDTO";
import { IconSearch } from "../../global.style";

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
  const [page, setPage] = useState<number>(0);

  const [OpenModalAddCotation, setOpenModalAddCotation] = useState<ModalDTO>({
    open: false,
    id: 0,
  });

  const [OpenModalCotation, setOpenModalCotation] = useState<ModalDTO>({
    open: false,
    id: 0,
  });

  const [OpenModalItens, setOpenModalItens] = useState<ModalDTO>({
    open: false,
    id: 0,
  })

  // const [showItensTopic, setShowItensTopic] = useState<ModalDTO>({
  //   open: false,
  //   id: 0,
  // });

  const changePage = (index: number) => {
    setPage(index)
  }

  const handleUserSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    try {
      if(value.length >= 4) {
        // const {data} = await api.get('')
      }
    } catch (error) {
      
    }
  }

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
  },[page, OpenModalCotation.open])

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
          onChange={ (e) => handleUserSearch(e)}
        ></InputForm>
        <IconSearch />
      </DivSearch>

      <Pagination page={page} onPageChange={changePage} allPages={allPages} />
      <ContainerAllInfo>
        {listTopics?.content?.map((item: any) => (
          <ContainerCard key={item.topicId}>
            <TitleCard color={ColorEnum[item.status]}>
              <TopicName>
                <MdSegment />
                <h2>{item.title.toUpperCase()}</h2>
                <p>Status: {StatusEnum[item.status]}</p>
              </TopicName>
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
                onClick={() =>
                  setOpenModalItens({
                    open: !OpenModalItens.open,
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
              {user.profile === "BUYER" && (
                <ButtonCard
                  onClick={() =>
                    setOpenModalAddCotation({ open: true, id: item.topicId })
                  }
                >
                  <BiAddToQueue /> Adicionar cotação{" "}
                </ButtonCard>
              )}
            </DivButtonsCard>

            <CardHome id={item.topicId} />

            {OpenModalItens.open && (
              <ModalCardItens id={OpenModalItens.id} onClick={() => setOpenModalItens({open: false})} />
            )}
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
          </ContainerCard>
        ))}
      </ContainerAllInfo>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Home);
