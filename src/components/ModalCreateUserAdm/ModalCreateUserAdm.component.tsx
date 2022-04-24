import { useFormik } from "formik";
import * as Yup from "yup";
import Notiflix from "notiflix";
import { ContainerModal, Modal } from "../ModalBuyer/ModalBuyer.style";
import { DivInputsLogin } from "../../pages/Login/Login.style";
import { Btn, DivErrorYup, Input } from "../../global.style";
import PasswordStrengthBar from "react-password-strength-bar";
import { Theme } from "../../theme";
import { imgConverter } from "../../utils/utils";
import api from "../../service/api";
import { ENDPOINT_ADMIN } from "../../constants";

function ModalCreateUserAdm({ onClick }: any) {

  const register = async (values: any) => {
    const dataUserCreate = new FormData();
    dataUserCreate.append('file', values.profileImage);
    dataUserCreate.append('email', values.username);
    dataUserCreate.append('fullName', values.fullName);
    dataUserCreate.append('password', values.password);
    dataUserCreate.append('groups', values.groups)
    if (values.password === values.confirmPassword) {
      try {
          const {data} = await api.post(ENDPOINT_ADMIN.CREATE_PROFILE, dataUserCreate)
          Notiflix.Notify.success(
            `Usuário cadastrado com sucesso.`
          );
      } catch (error) {
          console.log('Erro ao tentar cadastrar usuario pelo perfil administrador' + error)
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
      groups: "ADMINISTRATOR",
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
        .min(8, "Sua senha deve conter pelo menos 8 caracteres")
        .max(30, "Sua senha deve ter no máximo 30 caracteres")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]/,
          "Sua senha precisa conter pelo menos um caractere especial, uma letra maiúscula, uma letra minúscula e um número."
        ),
      confirmPassword: Yup.string().when("password", (password, field) =>
        password ? field.required().oneOf([Yup.ref("password")]) : field
      ),
    }),
    onSubmit: (values, actions) => {
        register(values)
        actions.resetForm()
    },
  });

  return (
    <ContainerModal>
      <Modal>
        <button onClick={onClick}> Fechar </button>
        <form onSubmit={formik.handleSubmit}>
          <DivInputsLogin>
            <input
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
            <input
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
              <input
                width="99%"
                height="40px"
                placeholder="Password"
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password ? (
                <DivErrorYup>{formik.errors.password}</DivErrorYup>
              ) : null}
              {/* <DivEye>
                {showPassword ? (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                )}
              </DivEye> */}
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

            <input
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

            <select name="groups" onChange={formik.handleChange}>
              <option value="COLLABORATOR">Colaborador</option>
              <option value="ADMINISTRATOR">Administrador</option>
              <option value="BUYER">Comprador</option>
              <option value="MANEGER">Gestor</option>
              <option value="FINANCIER">Financeiro</option>
            </select>

            <input
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

            <Btn width="100%" type="submit" color={Theme.color.primary}>
              Submit
            </Btn>
          </DivInputsLogin>
        </form>
      </Modal>
    </ContainerModal>
  );
}

export default ModalCreateUserAdm;