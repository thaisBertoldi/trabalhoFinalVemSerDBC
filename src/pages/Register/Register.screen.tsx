import { useFormik } from "formik";
import { useState } from "react";
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
// import ReactPasswordStrength from 'react-password-strength';

const Register = () => {

  const [showPassword, setShowPassword] = useState<boolean>(true);

  const register = (values: RegisterDTO) => {
    console.log(values);

    if (values.password === values.confirmPassword) {
      console.log('ok');
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

              {/* <ReactPasswordStrength
                  className="customClass"
                  style={{ display: 'none' }}
                  minLength={5}
                  minScore={2}
                  scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                  changeCallback={formik.values.password}
                  inputProps={{ name: "password_input", autoComplete: "off", className: "form-control" }}
              /> */}

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
export default Register;