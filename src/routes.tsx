<<<<<<< HEAD
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
=======
import { useEffect } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { setLogin } from "./store/action/authActions";

import { Header, Footer } from './components';
import { Login, Register, Home, RequestPurchase, Administration } from './pages';
import { isLoggedDTO } from './models/UserDTO';
import { RootState } from './store';

const Routers = ({auth, dispatch}: isLoggedDTO & DispatchProp) => {

  useEffect( () => {
    const hasToken:string | any = localStorage.getItem('token');
    const User = JSON.parse(hasToken);
    if(User?.token) {
      setLogin(dispatch, User)
    }
  },[] )
>>>>>>> main

  return (
    <BrowserRouter>
      <Header />
<<<<<<< HEAD
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
=======
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> }/>
          <Route path='/register' element={ <Register /> }/>
          <Route path='/request-purchase' element={<RequestPurchase />} />
          <Route path='/administration' element={<Administration />} />
        </Routes>
>>>>>>> main
      <Footer />
    </BrowserRouter>
  );
};

<<<<<<< HEAD
const mapStateToProps = (state: any) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(Routers);
=======
const mapStateToProps = (state: RootState) => ({
  auth: state.authReducer
})

export default connect(mapStateToProps)(Routers);
>>>>>>> main
