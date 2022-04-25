import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModalCreateUserAdm from "../../components/ModalCreateUserAdm/ModalCreateUserAdm.component";
import { CenterCustom, Container, InputForm, IconSearch } from "../../global.style";
import { isLoggedDTO, UsersAdmDTO } from "../../models/UserDTO";
import { RootState } from "../../store";
import {
  BtnAdm,
  CardUSerAdmin,
  ContainerAdmin,
  DataUser,
  DivImage,
  DivSearch,
  ImageUser,
  ParagraphInfo,
} from "./Administration.style";
import imgPerfil from "../../images/foto-perfil.png";
import { getAllUsers, handleProfile } from "../../store/action/adminActions";
import { TypeUserEnum } from "../../enums/TypeUserEnum";
import { DefaultImage } from "../../constants";

//tipá-los
const Administration = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState<Array<UsersAdmDTO>>([]);
  const [isSearchUser, setIsSearchUser] = useState<boolean>(false);
  const [userFind, setUserFind] = useState<Array<UsersAdmDTO>>([]);
  const [isAddUser, setIsAddUser] = useState(false);

  useEffect(() => {
    if (user?.profile !== "ADMINISTRATOR") {
      navigate("/");
    }
    getAllUsers(setAllUsers);
  }, []);

  const handleUserSearch = (value: string) => {
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
        {isSearchUser ? 
          userFind.map((user: UsersAdmDTO) => (
            <CardUSerAdmin>
              <DataUser>
                <DivImage>
                  <ImageUser
                     src={`data:image/jpeg;base64,${user?.image ?? DefaultImage}`}
                    alt="imagem de perfil"
                  />
                </DivImage>

                <p>
                  <strong>Usuário:</strong> {user.fullName}
                </p>
                <p>
                  <strong>Perfil:</strong> {TypeUserEnum[user.groups]}
                </p>
              </DataUser>
              <select name="type" onChange={formik.handleChange}>
                <option value="COLLABORATOR">Colaborador</option>
                <option value="ADMINISTRATOR">Administrador</option>
                <option value="BUYER">Comprador</option>
                <option value="MANEGER">Gestor</option>
                <option value="FINANCIER">Financeiro</option>
              </select>
              <BtnAdm
                width={"200px"}
                background={"#C5C5C5"}
                color={"#202124"}
                type="submit"
              >
                Alterar perfil do usuário
              </BtnAdm>
            </CardUSerAdmin>
          )
          )
      :
        allUsers?.map((user: UsersAdmDTO) => (
          <form
            onSubmit={(event) =>
              handleProfile(
                setAllUsers,
                formik.resetForm,
                event,
                user.userId,
                formik.values.type
              )
            }
            key={user.userId}
          >
            <CardUSerAdmin>
              <DataUser>
                <DivImage>
                  <ImageUser
                    src={`data:image/jpeg;base64,${user?.image ?? DefaultImage}`}
                    alt="imagem de perfil"
                  />
                </DivImage>

                <p>
                  <strong>Usuário:</strong> {user.fullName}
                </p>
                <p>
                  <strong>Perfil:</strong> {TypeUserEnum[user.groups]}
                </p>
              </DataUser>
              <select name="type" onChange={formik.handleChange}>
                <option value="COLLABORATOR">Colaborador</option>
                <option value="ADMINISTRATOR">Administrador</option>
                <option value="BUYER">Comprador</option>
                <option value="MANEGER">Gestor</option>
                <option value="FINANCIER">Financeiro</option>
              </select>
              <BtnAdm
                width={"200px"}
                background={"#C5C5C5"}
                color={"#202124"}
                type="submit"
              >
                Alterar perfil do usuário
              </BtnAdm>
            </CardUSerAdmin>
          </form>
        ))}

        {isAddUser && (
          <ModalCreateUserAdm onClick={() => setIsAddUser(false)} />
        )}
      </ContainerAdmin>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Administration);
