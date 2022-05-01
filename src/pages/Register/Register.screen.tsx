import Notiflix from "notiflix";
import PasswordStrengthBar from "react-password-strength-bar";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import { Theme } from "../../theme";
import { isLoggedDTO, RegisterDTO } from "../../models/UserDTO";
import { handleRegister } from "../../store/action/authActions";
import { hasLogin, imgConverter } from "../../utils/utils";
import { RootState } from "../../store";
import { mySchemaRegister } from "../../utils/yupValidations";
import { DivInputsLogin, DivLogo } from "../Login/Login.style";
import { DivEyeRegister } from "./Register.style";
import {
  Btn,
  Input,
  Title,
  DivErrorYup,
  DivInputFile,
  ContainerTitle,
  ContainerGetInfo,
  ContainerPrincipal,
} from "../../global.style";

const Register = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {

  const [showPassword, setShowPassword] = useState<boolean>(true);

  const navigate = useNavigate();

  const register = (values: RegisterDTO) => {
    if (values.password === values.confirmPassword) {
      handleRegister(values, dispatch, navigate);
    } else {
      Notiflix.Notify.warning('A senha deve ser igual a confirmação');
    }
  };

  useEffect(() => {
    hasLogin(navigate);
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      profileImage: null,
    },
    validationSchema: mySchemaRegister,
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
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.errors.fullName && formik.touched.fullName ? (
              <DivErrorYup>{formik.errors.fullName}</DivErrorYup>
            ) : <DivErrorYup></DivErrorYup>}

            <Input
              width="99%"
              height="40px"
              placeholder="E-mail"
              id="username"
              name="username"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username ? (
              <DivErrorYup>{formik.errors.username}</DivErrorYup>
            ) : <DivErrorYup></DivErrorYup>}
            <div>
              <Input
                width="99%"
                height="40px"
                placeholder="Password"
                id="password"
                name="password"
                type={showPassword ? "password" : "text"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password ? (
                <DivErrorYup>{formik.errors.password}</DivErrorYup>
              ) : <DivErrorYup></DivErrorYup>}
              <DivEyeRegister>
                {showPassword ? (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                )}
              </DivEyeRegister>

              {formik.values.password.length > 0 && (
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
            )}
            </div>

            <Input
              width="99%"
              height="40px"
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <DivErrorYup>As senhas estão diferentes.</DivErrorYup>
            ) : <DivErrorYup></DivErrorYup>}

            <DivInputFile>
              <span>Escolha uma imagem</span>
              <input
                width={"100%"}
                height={"40px"}
                id="profileImage"
                name="profileImage"
                type="file"
                accept="image/*"
                onChange={(event) =>
                  imgConverter(event, formik.setFieldValue, "profileImage")
                }
              />
            </DivInputFile>
            {formik.errors.profileImage && formik.touched.profileImage ? (
                <DivErrorYup>{formik.errors.profileImage}</DivErrorYup>
              ) : <DivErrorYup></DivErrorYup>}

            <Btn width="100%" type="submit" color={Theme.color.primary}>
              Submit
            </Btn>
          </DivInputsLogin>
        </form>
      </ContainerGetInfo>
    </ContainerPrincipal>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(Register);
