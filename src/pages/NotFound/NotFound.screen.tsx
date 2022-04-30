import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { hasLogin, redirectToLogin } from "../../utils/utils";
import notFound from "../../images/notFound.png";
import notFoundGif from "../../images/notFound.gif"
import { Btn } from "../../global.style";
import { ContainerAll, ContainerNotFound, MessageH2 } from "./NotFound.style";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      redirectToLogin(navigate); 
      hasLogin(navigate)
    }, 3000);
  }, []);

  return (
    <ContainerAll>
      <ContainerNotFound>
        <img src={notFound} alt="página não encontrada" />
        <MessageH2>
          Retorne para a <Link to="/"><Btn width={'200px'} color={'#588104'}>página principal</Btn></Link> ou aguarde para
          ser redirecionado
        </MessageH2>
      </ContainerNotFound>
      <img src={notFoundGif} alt="página não encontrada" />
    </ContainerAll>
  );
};

export default NotFound;
