import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PasswordStrengthBar from "react-password-strength-bar";
import Logo from "../../components/Logo/Logo";
import Notiflix from "notiflix";
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
import { DivEye, DivInputsLogin, DivLogo } from "./Login.style";


const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Este campo precisa ser preenchido com um email.")
        .required("Você precisa preencher esse campo"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                )}
              </DivEye>
            </div>

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

            <Btn width="100%" type="submit">
              Submit
            </Btn>

            <Paragraph>
              Não possui uma conta?{" "}
              <LinkCustom to="/register">Registrar</LinkCustom>
            </Paragraph>
          </DivInputsLogin>
        </form>
      </ContainerGetInfo>
    </ContainerPrincipal>
  );
};
export default Login;
