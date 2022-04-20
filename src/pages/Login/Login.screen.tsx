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
  
  const [showPassword, setShowPassword] = useState<boolean>(true);

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
                width="99%"
                height="40px"
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
            <div>
              <Btn width="100%" type="submit">Submit</Btn>
            </div>
            <div>
              <Paragraph>
                Não possui uma conta? <LinkCustom to="/register">Registrar</LinkCustom>
              </Paragraph>
            </div>
          </DivInputsLogin>
        </form>
      </ContainerGetInfo>
    </ContainerPrincipal>
  );
};
export default Login;
