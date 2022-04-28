import { useFormik } from "formik";
import * as Yup from "yup";
import Notiflix from "notiflix";
import { AiFillCloseCircle } from "react-icons/ai";
import { ContainerModal } from "../ModalBuyer/ModalBuyer.style";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Btn, DivErrorYup, DivStrengthBar, DivInputFile } from "../../global.style";
import PasswordStrengthBar from "react-password-strength-bar";
import { Theme } from "../../theme";
import { imgConverter } from "../../utils/utils";
import api from "../../service/api";
import { ENDPOINT_ADMIN } from "../../constants";
import {
  DivClose,
  DivEyeAdm,
  InputCreateUserAdm,
  ModalAdm,
  SelectCreateUserAdm,
} from "./ModalCreateUser.style";
import { useState } from "react";
import { UserAdmRegisterDTO } from "../../models/UserDTO";
import { ModalComponentDTO } from "../../models/ModalsDTO";

const ModalCreateUserAdm = ({ onClick }: ModalComponentDTO) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const register = async (values: UserAdmRegisterDTO) => {
    const dataUserCreate = new FormData();
    dataUserCreate.append("file", values.profileImage);
    dataUserCreate.append("email", values.username);
    dataUserCreate.append("fullName", values.fullName);
    dataUserCreate.append("password", values.password);
    dataUserCreate.append("groups", values.groups);
    if (values.password === values.confirmPassword) {
      try {
        const { data } = await api.post(
          ENDPOINT_ADMIN.CREATE_PROFILE,
          dataUserCreate
        );
        Notiflix.Notify.success(`Usuário cadastrado com sucesso.`);
      } catch (error) {
        console.log(
          "Erro ao tentar cadastrar usuario pelo perfil administrador" + error
        );
        Notiflix.Notify.failure(
          `Sinto muito, mas nao foi possivel acessar a api. ${error}`
        );
      }
    } else {
      console.log("A senha deve ser igual a confirmação");
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      profileImage: null,
      groups: "opcao",
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
        .required('Você precisa preencher esse campo')
        .min(8, "Sua senha precisa conter pelo menos 8 caracteres")
        .max(30, "Sua senha deve conter no máximo 30 caracteres")
        .matches(/^(?=.*\d)/, "Sua senha precisa conter um número")
        .matches(/^(?=.*[a-z])/, "Sua senha precisa conter uma letra minúscula")
        .matches(/^(?=.*[A-Z])/, "Sua senha precisa conter uma letra maiúscula")
        .matches(/^(?=.*[$*&@#])/, "Sua senha precisa conter um caractere especial."),
      confirmPassword: Yup.string().when("password", (password, field) =>
        password ? field.required().oneOf([Yup.ref("password")]) : field
      ),
      groups: Yup.string().matches(
        /[^opcao]/,
        "Por favor, escolha uma das opções."
      ),
    }),
    onSubmit: (values, actions) => {
      register(values);
      actions.resetForm();
    },
  });

  return (
    <ContainerModal>
      <ModalAdm>
        <DivClose>
          <AiFillCloseCircle onClick={onClick} />
        </DivClose>
        <h4>Por favor, preencha o formulário: </h4>
        <form onSubmit={formik.handleSubmit}>
          <InputCreateUserAdm
            width={"100%"}
            height={"40px"}
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
          ) : 
          <DivErrorYup></DivErrorYup>}

          <InputCreateUserAdm
            width={"100%"}
            height={"40px"}
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
            <InputCreateUserAdm
              width={"100%"}
              height={"40px"}
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
            ) : (
              <DivStrengthBar>
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
              </DivStrengthBar>
            )}
            <DivEyeAdm>
              {showPassword ? (
                <FaEye onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
              )}
            </DivEyeAdm>
          </div> 

          <InputCreateUserAdm
            width={"100%"}
            height={"40px"}
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

          <SelectCreateUserAdm name="groups" onChange={formik.handleChange}>
            <option value="opcao">Escolha uma opção</option>
            <option value="COLLABORATOR">Colaborador</option>
            <option value="ADMINISTRATOR">Administrador</option>
            <option value="BUYER">Comprador</option>
            <option value="MANAGER">Gestor</option>
            <option value="FINANCIER">Financeiro</option>
          </SelectCreateUserAdm>
          {formik.errors.groups && formik.touched.groups ? (
            <DivErrorYup>{formik.errors.groups}</DivErrorYup>
          ) : <DivErrorYup></DivErrorYup>}

          <DivInputFile>
            <span>Escolha um arquivo</span>
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

          <Btn width="100%" type="submit" color={Theme.color.primary}>
            Submit
          </Btn>
        </form>
      </ModalAdm>
    </ContainerModal>
  );
};

export default ModalCreateUserAdm;
