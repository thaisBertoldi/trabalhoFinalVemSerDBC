import { Copyright, FooterCustom } from "./Footer.style";

const Footer = () => {
  const hasToken: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasToken);

  return (
    <>
      {/* {User?.token && (
        <FooterCustom>
          <Copyright>©{new Date().getFullYear()} Copyright</Copyright>
        </FooterCustom>
      )} */}
    </>
  );
};

export default Footer;
