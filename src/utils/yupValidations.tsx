import * as Yup from "yup";
import { SUPPORTED_FORMATS, FILE_SIZE } from "../constants";

export const mySchemaRegister = Yup.object().shape({
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
    profileImage: Yup.mixed()
      .test(
        "fileSize",
        "Este arquivo é muito grande",
        (value) => value === null || value.size <= FILE_SIZE
      )
      .test(
        "fileType",
        "Este tipo de arquivo não é suportado.",
        (value) => value === null || SUPPORTED_FORMATS.includes(value.type)
      ),
    groups: Yup.string().matches(
      /[^opcao]/,
      "Por favor, escolha uma das opções."
    ),
  });
  
  export const mySchemaLogin = Yup.object().shape({
    username: Yup.string()
      .email("Este campo precisa ser preenchido com um email.")
      .required("Você precisa preencher esse campo"),
    password: Yup.string().required("Você precisa preencher esse campo"),
  });
  
  export const mySchemaPurchase = Yup.object().shape({
    itemName: Yup.string().required("Você precisa preencher esse campo"),
    description: Yup.string().required("Você precisa preencher esse campo"),
    value: Yup.string().required("Você precisa preencher esse campo"),
    file: Yup.mixed()
      .required("Você precisa anexar um arquivo")
      .test(
        "fileSize",
        "Este arquivo é muito grande",
        (value) => value === null || value.size <= FILE_SIZE
      )
      .test(
        "fileType",
        "Este tipo de arquivo não é suportado.",
        (value) => value === null || SUPPORTED_FORMATS.includes(value.type)
      ),
  });