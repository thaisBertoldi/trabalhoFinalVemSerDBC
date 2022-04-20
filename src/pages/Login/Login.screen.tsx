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
import { DivEye, DivInputsLogin, DivLogo } from "./Login.style";


const Login = () => {
  const [typePassword, setTypePassword] = useState("password");
  const [isPassword, setIsPassword] = useState(true);


  const changeTypePasswordText = () => {
    setIsPassword(false);
    setTypePassword("text");
  };

  const changeTypePasswordOcult = () => {
    setIsPassword(true);
    setTypePassword("password");
  };

  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
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
            <div>
              <Input
                width="90%"
                height="30%"
                placeholder="Username"
                id="user"
                name="user"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.user}
              />
            </div>
            <div>
              <Input
                width="90%"
                height="30%"
                placeholder="Password"
                id="password"
                name="password"
                type={typePassword}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <DivEye>
                  {isPassword && (
                    <FaEye onClick={() => changeTypePasswordText()} />
                  )}
                  {!isPassword && (
                    <FaEyeSlash onClick={() => changeTypePasswordOcult()} />
                  )}
                </DivEye>
            </div>
            <div>
              <Btn type="submit">Submit</Btn>
            </div>
            <div>
              <Paragraph>
                Não possui uma conta?<LinkCustom to="/register">Registrar</LinkCustom>
              </Paragraph>
            </div>
          </DivInputsLogin>
        </form>
      </ContainerGetInfo>
    </ContainerPrincipal>
  );
};
export default Login;
