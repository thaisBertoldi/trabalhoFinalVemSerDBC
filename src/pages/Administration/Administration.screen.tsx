import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModalCreateUserAdm from "../../components/ModalCreateUserAdm/ModalCreateUserAdm.component";
import { Btn, CenterCustom, Container } from "../../global.style";
import { isLoggedDTO, UsersAdmDTO } from "../../models/UserDTO";
import { RootState } from "../../store";
import {
  CardUSerAdmin,
  ContainerAdmin,
  DataUser,
  DivImage,
  ImageUser,
} from "./Administration.style";
import imgPerfil from "../../images/foto-perfil.png";
import { getAllUsers, handleProfile } from "../../store/action/adminActions";
import { StatusEnum } from "../../enums/StatusEnum";

//tipá-los
const Administration = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState<Array<UsersAdmDTO>>([]);
  const [isAddUser, setIsAddUser] = useState(false);

  useEffect(() => {
    if (user?.profile !== "ADMINISTRATOR") {
      navigate("/");
    }
    getAllUsers(setAllUsers);
  }, []);

  const formik = useFormik({
    initialValues: {
      type: "COLLABORATOR",
    },
    onSubmit: (values) => {},
  });
  return (
    <Container>
      <CenterCustom>
        <Btn width={"300px"} onClick={() => setIsAddUser(true)}>
          Cadastrar novo usuário
        </Btn>
      </CenterCustom>
      <CenterCustom>
        <h3>Usuários Cadastrados: </h3>
      </CenterCustom>

      <ContainerAdmin>
        {allUsers?.map((user: UsersAdmDTO) => (
          <form
            onSubmit={(event) =>
              handleProfile(setAllUsers, formik.resetForm, event, user.userId, formik.values.type)
            }
            key={user.userId}
          >
            <CardUSerAdmin>
              <DataUser>
                <DivImage>
                <ImageUser
                  src={
                    user?.image !== null || '' ? `data:image/jpeg;base64,${user?.image}` : imgPerfil
                  }
                  alt="imagem de perfil"
                />
                </DivImage>

                <p>
                  <strong>Usuário:</strong> {user.fullName}
                </p>
                <p>
                  <strong>Perfil:</strong> {StatusEnum[user.groups]}
                </p>
              </DataUser>
              {
                <>
                  <select name="type" onChange={formik.handleChange}>
                    <option value="COLLABORATOR">Colaborador</option>
                    <option value="ADMINISTRATOR">Administrador</option>
                    <option value="BUYER">Comprador</option>
                    <option value="MANEGER">Gestor</option>
                    <option value="FINANCIER">Financeiro</option>
                  </select>
                  <Btn width={"200px"} type="submit">
                    Alterar Usuário
                  </Btn>
                </>
              }
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
