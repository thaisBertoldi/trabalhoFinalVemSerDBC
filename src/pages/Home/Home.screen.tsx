import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CenterCustom, Container } from "../../global.style";
import { isLoggedDTO } from "../../models/UserDTO";
import moment from "moment";

import api from "../../service/api";
import { RootState } from "../../store";
import { redirectAdmin, redirectToLogin } from "../../utils/utils";
import { ContainerCard, TitleCard, ButtonCard, DivButtonsCard, CardItem } from "./Home.style";

import { ModalBuyer, ModalCotation } from "../../components"
import { StatusEnum } from "../../enums/StatusEnum";

//listas apenas do colaborador se for usuario tipo colaborador
//lista geral com botao de aprovar ou reprovar pro gestor se tiver mais de duas cotacoes
//lista geral com botao de aprovar ou reprovar pro financeiro se o gestor tiver aprovado
//lista geral pro comprador com modal pra solicitar cotacao

const exemplo = [
  {
    nome: 'TV',
    valor: 'R$ 1.000,00',
    data: '01/01/2020',
  },
  {
    nome: 'TV',
    valor: 'R$ 1.000,00',
    data: '01/01/2020',
  }
]

const Home = ({ auth, dispatch }: isLoggedDTO & DispatchProp) => {

  const navigate = useNavigate();
  const hasUser: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasUser);

  const [list, setList] = useState<any>([]);
  const [OpenModalAddCotation, setOpenModalAddCotation] = useState<boolean>(false);
  const [OpenModalCotation, setOpenModalCotation] = useState<boolean>(false);
  const [showItensTopic, setShowItensTopic] = useState<boolean>(false);

  const setup = async () => {
    try {
      const { data } = await api.get("/main-page/topics?page=0");
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    redirectToLogin(navigate);
    redirectAdmin(navigate, auth);
    setup();
  }, [auth]);

  return (
    <Container>
      <CenterCustom>
        <h1>Seja bem-vindo(a), {User?.fullName}</h1>
      </CenterCustom>
      {
        list?.content?.map((item: any) => (
          <ContainerCard key={item.topicId}>
            <TitleCard>
              <p>Título: {item.title}</p>
              <p>Data: {moment(item.date).format("DD/MM/YYYY")}</p>
              <p>Valor total: R$ {item.totalValue}</p>
              <p>Status: { StatusEnum[item.status]}</p>
            </TitleCard>
            <DivButtonsCard>
              <ButtonCard onClick={ () => setShowItensTopic(!showItensTopic)}> Visualizar Itens do tópico </ButtonCard>
              <ButtonCard onClick={ () => setOpenModalCotation(!OpenModalCotation) } > Visualizar cotações </ButtonCard>
              <ButtonCard onClick={ () => setOpenModalAddCotation(!OpenModalAddCotation) }> Adicinar cotação </ButtonCard>
            </DivButtonsCard>
            {/* {
              showItensTopic && (
                exemplo.map((item, index) => (
                  <CardItem key={index}>
                    <img src={Image} alt="imagem do iten" />
                    <p>{item.nome}</p>
                    <p>{item.data}</p>
                    <p>{item.valor}</p>
                  </CardItem>
                ))
              )
            } */}
          </ContainerCard>
        ))
      }
      
      { OpenModalAddCotation && ( <ModalBuyer onClick={ () => setOpenModalAddCotation(!OpenModalAddCotation) } /> ) }
      { OpenModalCotation && ( <ModalCotation onClick={ () => setOpenModalCotation(!OpenModalCotation) } /> ) }
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(Home);
