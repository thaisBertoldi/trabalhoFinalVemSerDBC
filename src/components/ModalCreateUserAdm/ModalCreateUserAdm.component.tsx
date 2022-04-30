import PasswordStrengthBar from "react-password-strength-bar";
import Notiflix, { Loading } from "notiflix";
import { useState } from "react";
import { useFormik } from "formik";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../../service/api";
import upload from "../../images/upload.svg";
import { Theme } from "../../theme";
import { imgConverter } from "../../utils/utils";
import { ENDPOINT_ADMIN } from "../../constants";
import { ContainerModal } from "../globalStyleComponents.style";
import { mySchemaRegister } from "../../utils/yupValidations";
import {
  Btn,
  DivErrorYup,
  DivStrengthBar,
  DivInputFileIMG
} from "../../global.style";
import {
  ModalAdm,
  DivClose,
  DivEyeAdm,
  InputCreateUserAdm,
  SelectCreateUserAdm,
} from "./ModalCreateUser.style";
import { UserAdmRegisterDTO } from "../../models/UserDTO";
import { ModalComponentDTO } from "../../models/ModalsDTO";

const ModalCreateUserAdm = ({ onClick }: ModalComponentDTO) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const register = async (values: UserAdmRegisterDTO) => {
    Loading.circle();
    const dataUserCreate = new FormData();
    dataUserCreate.append("file", values.profileImage);
    dataUserCreate.append("email", values.username);
    dataUserCreate.append("fullName", values.fullName);
    dataUserCreate.append("password", values.password);
    dataUserCreate.append("groups", values.groups);
    try {
      const { data } = await api.post(
        ENDPOINT_ADMIN.CREATE_PROFILE,
        dataUserCreate
      );
      Notiflix.Notify.success(`Usuário cadastrado com sucesso.`);
      onClick();
    } catch (error: any) {
      Notiflix.Notify.failure(
        `Sinto muito, mas nao foi possivel acessar a api. ${error.response.data.message}`
      );
    } finally {
      Loading.remove();
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
    validationSchema: mySchemaRegister,
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
        <h5>Por favor, preencha o formulário: </h5>
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
          ) : (
            <DivErrorYup></DivErrorYup>
          )}

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
          ) : (
            <DivErrorYup></DivErrorYup>
          )}
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
                {formik.values.password.length > 1 && (
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
          ) : (
            <DivErrorYup></DivErrorYup>
          )}

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
          ) : (
            <DivErrorYup></DivErrorYup>
          )}

          <DivInputFileIMG>
            <label htmlFor="profileImage">
                    <img src={upload} alt="envio de arquivo" />
            </label>
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
          </DivInputFileIMG>
          {formik.errors.profileImage && formik.touched.profileImage ? (
            <DivErrorYup>{formik.errors.profileImage}</DivErrorYup>
          ) : null}

          <Btn width="100%" type="submit" color={Theme.color.primary}>
            Submit
          </Btn>
        </form>
      </ModalAdm>
    </ContainerModal>
  );
};

export default ModalCreateUserAdm;
