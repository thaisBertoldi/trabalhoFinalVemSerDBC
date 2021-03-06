import Notiflix from "notiflix";
import { isLoggedDTO } from "../models/UserDTO";

export const hasLogin = (navigate: Function) => {
  const hasToken: isLoggedDTO | any = localStorage.getItem("token");
  const User = JSON.parse(hasToken);
  if (User?.token) {
    navigate("/");
  }
};

export const redirectToLogin = (navigate: Function) => {
  const hasToken: isLoggedDTO | any = localStorage.getItem("token");
  const User = JSON.parse(hasToken);
  if (!User?.token) {
    navigate("/login");
  }
};

export const redirectAdmin = (navigate: Function, profile: string) => {
  if (profile === "ADMINISTRATOR") {
    navigate("/administration");
  }
};

export const maskMoney = (
  e: React.ChangeEvent<HTMLInputElement>,
  formik: Function,
  value: string
) => {
  let money = e.target.value;
  money = money.replace(/\D/g, "");
  money = money.replace(/(\d)(\d{2})$/, "$1,$2");
  money = money.replace(/(?=(\d{3})+(\D))\B/g, ".");
  formik(value, `R$ ${money}`);
};

export const removeMaskMoney = (value: string) => {
  return value.replace("R$ ", "").replace(".", "").replace(",", ".");
};

export const maskMoneyHTML = (value: string|number) => {
  let convertText =  value.toString()
  return `R$ ${convertText.replace('.', ',')}`
}

export const imgConverter = (
  event: React.ChangeEvent<HTMLInputElement>,
  formik: Function,
  value: string
) => {
  const target = event.target as HTMLInputElement;
  const profileImage = target.files?.[0];
  if(profileImage) {
    Notiflix.Notify.success(`Imagem enviada ${profileImage?.name}`);
  } else {
    Notiflix.Notify.warning(`Imagem não recebida`);
  }
  return formik(value, profileImage);
};


