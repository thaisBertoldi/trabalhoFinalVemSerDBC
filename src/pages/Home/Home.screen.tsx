import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CenterCustom,
  Container,
  InputForm,
  Title,
  TitleNotFoundInfo,
} from "../../global.style";
import { isLoggedDTO } from "../../models/UserDTO";

import { RootState } from "../../store";
import { redirectAdmin, redirectToLogin } from "../../utils/utils";
import { DivSearch, ContainerAllInfo, DivDescriptionTopic } from "./Home.style";

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
import { ENDPOINT_TOPICS, TYPE_USERS } from "../../constants";

const Home = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();
  const hasUser: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasUser);

  const [listTopics, setListTopics] = useState<Array<TopicDTO>>([]);
  const [listSearched, setListSearched] = useState<Array<TopicDTO>>([]);
  const [allPages, setAllPages] = useState<number>(0);
  const [allPagesSearch, setAllPagesSearch] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [descriptionTopic, setDescriptionTopic] = useState("Todos os tópicos");

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

  const [pageSearch, setPageSeach] = useState<number>(0);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const handleUserSearch = async () => {
    try {
      setPage(0);
      const { data } = await api.get(
        `${ENDPOINT_TOPICS.GET_ALL}=${pageSearch}&title=${inputSearch}`
      );
      setListSearched(data.content);
      setAllPagesSearch(data.totalPages);
      setIsSearch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getDescriptionTopic = () => {
    if (user.profile === TYPE_USERS.COLAB) {
      setDescriptionTopic("Seus tópicos");
    }
    if (
      user.profile === TYPE_USERS.MANAGER ||
      user.profile === TYPE_USERS.FINANCIER
    ) {
      setDescriptionTopic("Tópicos a aprovar");
    }
    if (user.profile === TYPE_USERS.USER) {
      setDescriptionTopic(
        "Aguarde o administrador registrar seu perfil de usuário."
      );
    }
  };

  useEffect(() => {
    redirectToLogin(navigate);
    redirectAdmin(navigate, user.profile);
    getDescriptionTopic();
  }, [user]);

  useEffect(() => {
    handleUserSearch();
  }, [inputSearch, pageSearch]);

  useEffect(() => {
    getTopics(setListTopics, setAllPages, page, setIsSearch);
  }, [page, OpenModalQuotation.open]);

  return (
    <Container>
      <CenterCustom>
        <Title size="24px" spacing="2">
          Seja bem-vindo(a), {User?.fullName}
        </Title>
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
      <DivDescriptionTopic>
        <h3>{descriptionTopic}</h3>
      </DivDescriptionTopic>
      <ContainerAllInfo>
        {!isSearch ? (
          listTopics.length > 0 ? (
            listTopics?.map((item: TopicDTO) => (
              <CardTopicHome
                item={item}
                user={user}
                setOpenModalQuotation={setOpenModalQuotation}
                setOpenModalAddQuotation={setOpenModalAddQuotation}
                setOpenModalItens={setOpenModalItens}
              />
            ))
          ) : (
            <CenterCustom>
              <TitleNotFoundInfo>Nenhum tópico encontrado</TitleNotFoundInfo>
            </CenterCustom>
          )
        ) : listSearched?.length > 0 ? (
          listSearched?.map((item: TopicDTO, index) => (
            <CardTopicHome
              item={item}
              user={user}
              key={index}
              setOpenModalQuotation={setOpenModalQuotation}
              setOpenModalAddQuotation={setOpenModalAddQuotation}
              setOpenModalItens={setOpenModalItens}
            />
          ))
        ) : (
          <CenterCustom>
            <TitleNotFoundInfo>Nenhum tópico encontrado</TitleNotFoundInfo>
          </CenterCustom>
        )}

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
        {!isSearch
          ? listTopics?.length > 0 && (
              <Pagination
                page={page}
                onPageChange={(index: number) => setPage(index)}
                allPages={allPages}
              />
            )
          : listSearched?.length > 0 && (
              <Pagination
                page={pageSearch}
                onPageChange={(index: number) => setPageSeach(index)}
                allPages={allPagesSearch}
              />
            )}
      </CenterCustom>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Home);
