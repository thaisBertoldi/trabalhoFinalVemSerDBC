import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerPrincipal } from "../../global.style";

import api from "../../service/api";
import { redirectToLogin } from "../../utils/utils";

const Home = () => {
  const navigate = useNavigate();

  const hasToken: string | any = localStorage.getItem("token");

  useEffect(() => {
    redirectToLogin(navigate);
  }, [hasToken]);

  const setup = async () => {
    try {
      const { data } = await api.get("user/get-hello");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <Container>

        <h1>Home</h1>

    </Container>
  );
};

export default Home;
