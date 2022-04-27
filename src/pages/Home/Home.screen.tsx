import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CenterCustom, Container, InputForm } from "../../global.style";
import { isLoggedDTO } from "../../models/UserDTO";

import { RootState } from "../../store";
import { redirectAdmin, redirectToLogin } from "../../utils/utils";
import {
  DivSearch,
  ContainerAllInfo,
} from "./Home.style";

import {
  CardTopicHome,
  ModalBuyer,
  ModalCardItens,
  ModalCotation,
  Pagination,
} from "../../components";

import { getTopics } from "../../store/action/topicActions";
import { ModalDTO } from "../../models/ModalsDTO";
import { IconSearch } from "../../global.style";
import api from "../../service/api";

//listas apenas do colaborador se for usuario tipo colaborador
//lista geral com botao de aprovar ou reprovar pro gestor se tiver mais de duas cotacoes
//lista geral com botao de aprovar ou reprovar pro financeiro se o gestor tiver aprovado
//lista geral pro comprador com modal pra solicitar cotacao

const Home = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();
  const hasUser: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasUser);

  const [listTopics, setListTopics] = useState<any>([]);
  const [listSearched, setListSearched] = useState<any>([]);
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
  });

  const [inputSearch, setInputSearch] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const handleUserSearch = async () => {
    try {
      setPage(0);
      const {data} = await api.get(`/main-page/topic-by-titulo/${inputSearch}?page=${page}`);
      setListSearched(data);
      setIsSearch(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    redirectToLogin(navigate);
    redirectAdmin(navigate, user.profile);
  }, [user]);

  useEffect(() => {
    getTopics(setListTopics, setAllPages, page);
  }, [page, OpenModalCotation.open]);

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
          onChange={(e) => setInputSearch(e.target.value)}
        ></InputForm>
        <IconSearch onClick={ () => handleUserSearch() }/>
      </DivSearch>

      <ContainerAllInfo>
        {
          listTopics?.content?.map((item: any) => (
            <CardTopicHome item={item} setOpenModalCotation={setOpenModalCotation} setOpenModalAddCotation={setOpenModalAddCotation} user={user} setOpenModalItens={setOpenModalItens}/>
          ))
        }

        <CenterCustom>
          <Pagination page={page} onPageChange={ (index: number) => setPage(index)} allPages={allPages} />
        </CenterCustom>

        {OpenModalItens.open && ( <ModalCardItens id={OpenModalItens.id} onClick={() => setOpenModalItens({ open: false })} /> )}
        {OpenModalAddCotation.open && ( <ModalBuyer id={OpenModalAddCotation.id} onClick={() => setOpenModalAddCotation({ open: false })} /> )}
        {OpenModalCotation.open && ( <ModalCotation id={OpenModalCotation.id} onClick={() => setOpenModalCotation({ open: false })} /> )}
      </ContainerAllInfo>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Home);
