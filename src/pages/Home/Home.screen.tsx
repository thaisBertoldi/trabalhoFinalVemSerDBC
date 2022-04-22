import { useEffect } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../../global.style";
import { isLoggedDTO } from "../../models/UserDTO";

import api from "../../service/api";
import { RootState } from "../../store";
import { redirectToLogin } from "../../utils/utils";
import { Card, ContainerPrincipalCards, ContainerTitles } from "./Home.style";

const Home = ({ auth, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();
  const hasUser: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasUser);

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
      <h1>Seja bem-vindo(a), {User?.fullName}</h1>

      <ContainerPrincipalCards>
        <Card>
          <ContainerTitles>
            <h3>TÍTULO</h3>
            <h3>DATA</h3>
            <h3>VALOR TOTAL</h3>
            <h3>SITUAÇÃO</h3>
          </ContainerTitles>
          <ContainerTitles>
            <p>Teste</p>
            <p>00/00/0000</p>
            <p>R$ 800,00</p>
            <p>Aberto</p>
          </ContainerTitles>

          <ContainerTitles>
            <h4>LISTA DE COMPRAS</h4>
          </ContainerTitles>
          <ContainerTitles>
            <h5>Nome</h5>
            <h5>Data</h5>
            <h5>Valor</h5>
            <h5>Anexo</h5>
          </ContainerTitles>
          <ContainerTitles>
            <p>Teste</p>
            <p>00/00/0000</p>
            <p>R$ 800,00</p>
            <p>PDF</p>
          </ContainerTitles>
        </Card>

        <Card>
          <ContainerTitles>
            <h3>TÍTULO</h3>
            <h3>DATA</h3>
            <h3>VALOR TOTAL</h3>
            <h3>SITUAÇÃO</h3>
          </ContainerTitles>
          <ContainerTitles>
            <p>Teste</p>
            <p>00/00/0000</p>
            <p>R$ 800,00</p>
            <p>Aberto</p>
          </ContainerTitles>

          <ContainerTitles>
            <h4>LISTA DE COMPRAS</h4>
          </ContainerTitles>
          <ContainerTitles>
            <h5>Nome</h5>
            <h5>Data</h5>
            <h5>Valor</h5>
            <h5>Anexo</h5>
          </ContainerTitles>
          <ContainerTitles>
            <p>Teste</p>
            <p>00/00/0000</p>
            <p>R$ 800,00</p>
            <p>PDF</p>
          </ContainerTitles>
        </Card>
      </ContainerPrincipalCards>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(Home);
