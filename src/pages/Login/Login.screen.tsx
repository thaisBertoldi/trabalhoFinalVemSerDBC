import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import Notiflix from "notiflix";
import { connect, DispatchProp } from "react-redux";
import {
  Btn,
  Container,
  ContainerGetInfo,
  ContainerPrincipal,
  ContainerTitle,
  Input,
  LinkCustom,
  Paragraph,
  Title,
} from "../../global.style";
import { DivEye, DivInputsLogin, DivLogo } from "./Login.style";

import { handleLogin } from "../../store/action/authActions";
import { Theme } from "../../theme";
import { hasLogin } from "../../utils/utils";
import { RootState } from "../../store";
import { isLoggedDTO } from "../../models/UserDTO";

const Login = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(true);

  useEffect(() => {
    hasLogin(navigate);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Este campo precisa ser preenchido com um email.")
        .required("Você precisa preencher esse campo"),
      password: Yup.string().required("Você precisa preencher esse campo"),
    }),
    onSubmit: (values) => {
      handleLogin(values, dispatch, navigate);
    },
  });

  return (
    <Container>
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
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
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
                <LinkCustom >
                  <Link to="/register">Registrar</Link>  
                </LinkCustom>
              </Paragraph>
            </DivInputsLogin>
          </form>
        </ContainerGetInfo>
      </ContainerPrincipal>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Login);
