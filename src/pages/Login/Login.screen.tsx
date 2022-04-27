import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import { connect, DispatchProp } from "react-redux";
import {
  Btn,
  Container,
  ContainerGetInfo,
  ContainerPrincipal,
  ContainerTitle,
  DivErrorYup,
  Input,
  LinkCustom,
  Paragraph,
  Title,
} from "../../global.style";
import { ContainerLogin, DivEye, DivInputsLogin, DivLogo } from "./Login.style";

import { handleLogin } from "../../store/action/authActions";
import { Theme } from "../../theme";
import { hasLogin } from "../../utils/utils";
import { RootState } from "../../store";
import { isLoggedDTO, UsersAdmDTO } from "../../models/UserDTO";
import { getAllUsers } from "../../store/action/adminActions";

const Login = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [hasUserName, setHasUserName] = useState<boolean>(true);
  const [allUsers, setAllUsers] = useState<Array<UsersAdmDTO>>([]);
  // const [page, setPage] = useState<number>(0);

  useEffect(() => {
    hasLogin(navigate);
    // getAllUsers(setAllUsers, page);
  }, []);

  // const verificationUsername = (username: string) => {
  //   console.log(allUsers)
  //   const userFilter = allUsers.filter((user: UsersAdmDTO) => {
  //     return user.username.match(username);
  //   });
  //   if (userFilter.length !== 0) {
  //     setHasUserName(false);
  //   } else {
  //     setHasUserName(true);
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email("Este campo precisa ser preenchido com um email.")
        .required("Você precisa preencher esse campo"),
      password: Yup.string().required("Você precisa preencher esse campo"),
    }),
    onSubmit: (values) => {
      handleLogin(values, dispatch, navigate);
    },
  });

  return (
    <ContainerLogin>
      <ContainerPrincipal>
        <ContainerTitle>
          <Title size="50px" spacing="normal">
            Sistema de
          </Title>
          <Title size="70px" spacing="30px">
            Vendas
          </Title>
        </ContainerTitle>
        <ContainerGetInfo>
          <DivLogo>
            <Logo />
          </DivLogo>
          <form onSubmit={formik.handleSubmit}>
            <DivInputsLogin>
              <Input
                width="99%"
                height="40px"
                placeholder="Username"
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                // onBlur={(event) => verificationUsername(event.target.value)}
                value={formik.values.username}
              />
              {formik.errors.username && formik.touched.username ? (
                <DivErrorYup>{formik.errors.username}</DivErrorYup>
              ) : null}
              {!hasUserName && (
                <DivErrorYup>
                  Esse usuário não está cadastrado no sistema.
                </DivErrorYup>
              )}
              <div>
                <Input
                  width="99%"
                  height="40px"
                  placeholder="Password"
                  id="password"
                  name="password"
                  type={showPassword ? "password" : "text"}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? (
                  <DivErrorYup>{formik.errors.password}</DivErrorYup>
                ) : null}
                <DivEye>
                  {showPassword ? (
                    <FaEye onClick={() => setShowPassword(!showPassword)} />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </DivEye>
              </div>

              <Btn width="100%" type="submit" color={Theme.color.primary}>
                Submit
              </Btn>

              <Paragraph>
                Não possui uma conta?{" "}
                <LinkCustom>
                  <Link to="/register">Registrar</Link>
                </LinkCustom>
              </Paragraph>
            </DivInputsLogin>
          </form>
        </ContainerGetInfo>
      </ContainerPrincipal>
    </ContainerLogin>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Login);
