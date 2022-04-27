import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CenterCustom, Container, InputForm } from "../../global.style";
import { isLoggedDTO } from "../../models/UserDTO";

import { RootState } from "../../store";
import { redirectAdmin, redirectToLogin } from "../../utils/utils";
import { DivSearch, ContainerAllInfo } from "./Home.style";

import {
  CardTopicHome,
  ModalBuyer,
  ModalCardItens,
  ModalQuotation,
  Pagination,
} from "../../components";

import { getTopics } from "../../store/action/topicActions";
import { ModalDTO } from "../../models/ModalsDTO";
import { IconSearch } from "../../global.style";
import api from "../../service/api";
import { TopicDTO } from "../../models/TopicDTO";

const Home = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();
  const hasUser: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasUser);

  const [listTopics, setListTopics] = useState<Array<TopicDTO>>([]);
  const [listSearched, setListSearched] = useState<Array<TopicDTO>>([]);
  const [allPages, setAllPages] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  const [OpenModalAddQuotation, setOpenModalAddQuotation] = useState<ModalDTO>({
    open: false,
    id: 0,
  });

  const [OpenModalQuotation, setOpenModalQuotation] = useState<ModalDTO>({
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
      const { data } = await api.get(
        `/main-page/topic-by-titulo/${inputSearch}?page=${page}`
      );
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
  }, [page, OpenModalQuotation.open]);

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
        <IconSearch onClick={() => handleUserSearch()} />
      </DivSearch>

      <ContainerAllInfo>
        {
          listTopics.length > 0 ? (
            listTopics?.map((item: TopicDTO) => (
              <CardTopicHome
                item={item}
                user={user}
                setOpenMModalQuotation={setOpenModalQuotation}
                setOpenModalAddQuotation={setOpenModalAddQuotation}
                setOpenModalItens={setOpenModalItens}
              />
            ))
          ) : (
            <h1>Nenhum tópico encontrado</h1>
          )
        }

        {OpenModalItens.open && (
          <ModalCardItens
            id={OpenModalItens.id}
            onClick={() => setOpenModalItens({ open: false })}
          />
        )}
        {OpenModalAddQuotation.open && (
          <ModalBuyer
            id={OpenModalAddQuotation.id}
            onClick={() => setOpenModalAddQuotation({ open: false })}
          />
        )}
        {OpenModalQuotation.open && (
          <ModalQuotation
            id={OpenModalQuotation.id}
            onClick={() => setOpenModalQuotation({ open: false })}
          />
        )}
      </ContainerAllInfo>
      <CenterCustom>
        {
          listTopics?.length > 0 && (
            <Pagination page={page} onPageChange={(index: number) => setPage(index)} allPages={allPages}/>
          )
        }
      </CenterCustom>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Home);
