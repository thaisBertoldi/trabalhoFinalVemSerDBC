import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ModalCreateUserAdm, CardAdm, Pagination } from "../../components";
import {
  CenterCustom,
  Container,
  InputForm,
  IconSearch,
} from "../../global.style";
import { isLoggedDTO, UsersAdmDTO } from "../../models/UserDTO";
import { RootState } from "../../store";
import {
  BtnAdm,
  ContainerAdmin,
  DivSearch,
  ParagraphInfo,
} from "./Administration.style";
import { getAllUsers, handleProfile } from "../../store/action/adminActions";

//tipá-los
const Administration = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState<Array<UsersAdmDTO>>([]);
  const [isSearchUser, setIsSearchUser] = useState<boolean>(false);
  const [userFind, setUserFind] = useState<Array<UsersAdmDTO>>([]);
  const [isAddUser, setIsAddUser] = useState(false);
  const [page, setPage] = useState<number>(0);
  const [allPages, setAllPages] = useState<number>(0);

  useEffect(() => {
    if (user?.profile !== "ADMINISTRATOR") {
      navigate("/");
    }
    getAllUsers(setAllUsers, page, setAllPages);
  }, [page]);

  const handleUserSearch = async (value: string) => {
    const userFilter = allUsers.filter((user: UsersAdmDTO) => {
      return user.fullName.match(value);
    });
    if (userFilter.length !== 0) {
      setUserFind(userFilter);
      setIsSearchUser(true);
    } else {
      setIsSearchUser(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      type: "COLLABORATOR",
    },
    onSubmit: (values) => {},
  });

  return (
    <Container>
      <CenterCustom>
        <ParagraphInfo>Deseja cadastrar um novo usuário? </ParagraphInfo>
        <BtnAdm
          width={"300px"}
          background={"#4CAF50"}
          color={"#FFFFFF"}
          onClick={() => setIsAddUser(true)}
        >
          Cadastrar novo usuário
        </BtnAdm>
      </CenterCustom>
      <DivSearch>
        <InputForm
          width={"50%"}
          height={"40px"}
          placeholder="Pesquisar"
          onChange={(event) => handleUserSearch(event.target.value)}
        ></InputForm>
        <IconSearch />
      </DivSearch>
      <CenterCustom>
        <h3>Usuários Cadastrados: </h3>
      </CenterCustom>

      <ContainerAdmin>
        {isSearchUser
          ? userFind.map((user: UsersAdmDTO) => (
              <CardAdm 
                imgUser={user?.image}
                fullName={user?.fullName}
                group={user?.groups}
                formik={formik}
              /> 
            ))
          : allUsers?.map((user: UsersAdmDTO) => (
              <form
                onSubmit={(event) =>
                  handleProfile(
                    setAllUsers,
                    formik.resetForm,
                    event,
                    user.userId,
                    formik.values.type,
                    page,
                    setAllPages,
                  )
                }
                key={user.userId}
              >
                <CardAdm 
                  imgUser={user?.image}
                  fullName={user?.fullName}
                  group={user?.groups}
                  formik={formik}
                />
              </form>
            ))}

        {isAddUser && (
          <ModalCreateUserAdm onClick={() => setIsAddUser(false)} />
        )}
        <Pagination page={page} onPageChange={ (index: number) => setPage(index)} allPages={allPages} />
      </ContainerAdmin>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Administration);
