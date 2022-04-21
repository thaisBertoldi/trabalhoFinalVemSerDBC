import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Header, Footer } from "./components";
import { Login, Register, Home } from "./pages";
import api from "./service/api";

const Routers = ({ auth, dispatch }: any) => {
  const [isLogged, setIsLogged] = useState(false);

  const hasToken = () => {
    if (auth.isLogged) {
      const dataLocalToken: any = localStorage.getItem("token");
      const convertDataToken = JSON.parse(dataLocalToken);
      console.log(convertDataToken.token);
      if (convertDataToken.token) {
        api.defaults.headers.common["Authorization"] = convertDataToken.token;
        console.log("We have a token");
        setIsLogged(true);
      }
    }
  };

  useEffect(() => {
    hasToken();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {isLogged ? (
          <Route path="/" element={<Home />} />
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(Routers);
