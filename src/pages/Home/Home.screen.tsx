import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CenterCustom, Container } from "../../global.style";
import { isLoggedDTO } from "../../models/UserDTO";

import api from "../../service/api";
import { RootState } from "../../store";
import { redirectToLogin } from "../../utils/utils";
import { ContainerCard, CardItem, TitleCard } from "./Home.style";

import Image from "../../images/testeImageIten.png";

import { ModalBuyer } from "../../components"

//listas apenas do colaborador se for usuario tipo colaborador
//lista geral com botao de aprovar ou reprovar pro gestor se tiver mais de duas cotacoes
//lista geral com botao de aprovar ou reprovar pro financeiro se o gestor tiver aprovado
//lista geral pro comprador com modal pra solicitar cotacao

const exemplo = {
  Itens: [
    {
      nome: "Tv",
      data: "12/02/2022",
      valor: "R$ 2000,00",
    },
    {
      nome: "Monitor",
      data: "12/02/2022",
      valor: "R$ 1200,00",
    },
    {
      nome: "Mouse Gamer",
      data: "12/02/2022",
      valor: "R$ 200,00",
    },
    {
      nome: "Teclado Gamer",
      data: "12/02/2022",
      valor: "R$ 500,00",
    },
  ],
};

const Home = ({ auth, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();
  const hasUser: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasUser);

  const [modal, setModal] = useState<boolean>(false);
  const [showItensTopic, setShowItensTopic] = useState<boolean>(false);

  useEffect(() => {
    redirectToLogin(navigate);
  }, []);

  const setup = async () => {
    try {
      const { data } = await api.get("user/get-hello");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <Container>
      {/* <CenterCustom>
        <h1>Seja bem-vindo(a), {User?.fullName}</h1>
      </CenterCustom>
      <ContainerCard>
        <TitleCard>
          <p>TÍTULO</p>
          <p>DATA</p>
          <p>VALOR TOTAL</p>
          <p>SITUAÇÃO</p>
          <button onClick={ () => setModal(!modal) }> Adicinar cotação </button>
        </TitleCard>
        <button onClick={ () => setShowItensTopic(!showItensTopic)}> Visualizar Itens do tópico </button>
        {
          showItensTopic && (
            exemplo.Itens.map((item, index) => (
              <CardItem key={index}>
                <img src={Image} alt="imagem do iten" />
                <p>{item.nome}</p>
                <p>{item.data}</p>
                <p>{item.valor}</p>
              </CardItem>
            ))
          )
        }
      </ContainerCard>
      { modal && ( <ModalBuyer onClick={ () => setModal(!modal) } /> ) } */}
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(Home);
