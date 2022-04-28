import * as Yup from "yup";
import PasswordStrengthBar from "react-password-strength-bar";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { connect, DispatchProp } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import { Theme } from "../../theme";
import {
  Btn,
  Input,
  Title,
  DivErrorYup,
  ContainerTitle,
  ContainerGetInfo,
  ContainerPrincipal,
} from "../../global.style";
import { DivEye, DivInputsLogin, DivLogo } from "../Login/Login.style";
import { DivLabelFile } from "./Register.style";

import { isLoggedDTO, RegisterDTO } from "../../models/UserDTO";
import { handleRegister } from "../../store/action/authActions";
import { hasLogin, imgConverter } from "../../utils/utils";
import { RootState } from "../../store";

const Register = ({ user, dispatch }: isLoggedDTO & DispatchProp) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const navigate = useNavigate();

  const register = (values: RegisterDTO) => {
    if (values.password === values.confirmPassword) {
      handleRegister(values, dispatch, navigate);
    } else {
      console.log("A senha deve ser igual a confirmação");
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
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, "Este é um nome muito curto.")
        .max(50, "Esse é mesmo o seu nome ou você deitou no teclado?")
        .matches(
          /[^0-9$*&@#]/gi,
          "Você precisa preencher esse campo apenas com letras"
        )
        .required("Você precisa preencher esse campo"),
      username: Yup.string()
        .email("Este campo precisa ser preenchido com um email.")
        .required("Você precisa preencher esse campo"),
      password: Yup.string()
        .required("Você precisa preencher esse campo")
        .min(8, "Sua senha precisa conter pelo menos 8 caracteres")
        .max(30, "Sua senha deve conter no máximo 30 caracteres")
        .matches(/^(?=.*\d)/, "Sua senha precisa conter um número")
        .matches(/^(?=.*[a-z])/, "Sua senha precisa conter uma letra minúscula")
        .matches(/^(?=.*[A-Z])/, "Sua senha precisa conter uma letra maiúscula")
        .matches(
          /^(?=.*[$*&@#])/,
          "Sua senha precisa conter um caractere especial."
        ),
      confirmPassword: Yup.string().when("password", (password, field) =>
        password ? field.required().oneOf([Yup.ref("password")]) : field
      ),
    }),
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
            ) : null}
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
            ) : null}
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
              ) : null}
              <DivEye>
                {showPassword ? (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                )}
              </DivEye>
            </div>

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
            ) : null}

            <DivLabelFile>
              <label htmlFor="profileImage">ENVIO DE ARQUIVO</label>
              <Input
                width="99%"
                height="40px"
                id="profileImage"
                name="profileImage"
                type="file"
                accept="image/*"
                onChange={(event) =>
                  imgConverter(event, formik.setFieldValue, "profileImage")
                }
              />
            </DivLabelFile>

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
