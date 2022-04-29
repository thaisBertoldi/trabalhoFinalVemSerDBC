import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import notFound from "../../images/notFound.png";
import notFoundGif from "../../images/notFound.gif"
import { ContainerAll, ContainerNotFound, MessageH2 } from "./NotFound.style";
import { Btn } from "../../global.style";
import { redirectToLogin } from "../../utils/utils";

const NotFound = () => {
  const navigate = useNavigate();
  const hasUser: string | any = localStorage.getItem("token");
  const User = JSON.parse(hasUser);

  useEffect(() => {
    redirectToLogin(navigate);
    setTimeout(() => {
      if(hasUser.profile === 'ADMINISTRATOR') {
        navigate("/administration")
      } else {
        navigate("/")
      }
    }, 3000);
  }, []);

  return (
    <ContainerAll>
      <ContainerNotFound>
        <img src={notFound} alt="página não encontrada" />
        <MessageH2>
          Retorne para a <Link to={hasUser.profile === 'ADMINISTRATOR' ? "/administration" : "/"}><Btn width={'200px'} color={'#588104'}>página principal</Btn></Link> ou aguarde para
          ser redirecionado
        </MessageH2>
      </ContainerNotFound>
      <img src={notFoundGif} alt="página não encontrada" />
    </ContainerAll>
  );
};

export default NotFound;
