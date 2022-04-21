import { useFormik } from "formik";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import {
  Btn,
  ContainerGetInfo,
  ContainerPrincipal,
  ContainerTitle,
  Input,
  LinkCustom,
  Paragraph,
  Title,
} from "../../global.style";
import { DivEye, DivInputsLogin, DivLogo } from "../Login/Login.style";

import { RegisterDTO } from "../../models/UserDTO";
import { handleRegister } from "../../store/action/authActions";
import PasswordStrengthBar from "react-password-strength-bar";

const Register = ({auth, dispatch}: any) => {

  const [showPassword, setShowPassword] = useState<boolean>(true);

  const navigate = useNavigate();

  const register = (values: RegisterDTO) => {
    if (values.password === values.confirmPassword) {
      handleRegister(values, dispatch, navigate)
    } else {
      console.log('A senha deve ser igual a confirmação');
    }
  }

  const formik = useFormik({
    initialValues: {
      user: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      register(values);
    },
  });

  return (
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
                placeholder="Nome Completo"
                id="user"
                name="user"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.user}
              />
              <Input
                width="99%"
                height="40px"
                placeholder="E-mail"
                id="email"
                name="email"
                type="email"
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
                  type={ showPassword ? 'password' : 'text' }
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <DivEye>
                  {
                    showPassword ? (
                      <FaEye onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                      <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                    )
                  }
                </DivEye>
              </div>

              {
                formik.values.password.length > 0 && (
                  <PasswordStrengthBar
                  password={formik.values.password}
                  barColors={[
                    "#B83E26",
                    "#FFB829",
                    "#009200",
                    "#009200",
                    "#009200",
                    "#009200",
                  ]}
                  minLength={8}
                  />
                )
              }

              <Input
                width="99%"
                height="40px"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type='password'
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />

              <Btn width="100%" type="submit">Submit</Btn>

              <Paragraph>
                Não possui uma conta? <LinkCustom to="/register">Registrar</LinkCustom>
              </Paragraph>

          </DivInputsLogin>
        </form>
      </ContainerGetInfo>
    </ContainerPrincipal>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.user
})

export default connect(mapStateToProps)(Register);