import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import { connect, DispatchProp } from "react-redux";
import {
  Btn,
  ContainerGetInfo,
  ContainerPrincipal,
  ContainerTitle,
  DivErrorYup,
  Input,
  Paragraph,
  Title,
} from "../../global.style";
import { ContainerLogin, DivEye, DivInputsLogin, DivLogo } from "./Login.style";

import { handleLogin } from "../../store/action/authActions";
import { Theme } from "../../theme";
import { hasLogin } from "../../utils/utils";
import { mySchemaLogin } from "../../utils/yupValidations";
import { RootState } from "../../store";
import { isLoggedDTO, UsersAdmDTO } from "../../models/UserDTO";

const Login = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [hasUserName, setHasUserName] = useState<boolean>(true);
  const [allUsers, setAllUsers] = useState<Array<UsersAdmDTO>>([]);

  useEffect(() => {
    hasLogin(navigate);
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: mySchemaLogin,
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
              
              <Paragraph> Não possui uma conta? <Link to="/register">Registrar</Link> </Paragraph>
              
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
