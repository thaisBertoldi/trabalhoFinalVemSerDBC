import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import { setLogin } from "./store/action/authActions";

import { Header, Footer } from './components';
import { Login, Register, Home } from './pages';
import { RootState } from './store';
import { isLoggedDTO } from './models/UserDTO';
import Quotation from './pages/Quotation/Quotation';


const Routers = ({auth, dispatch}: any) => {

  useEffect( () => {
    const hasToken:string | any = localStorage.getItem('token');
    const User = JSON.parse(hasToken);
    if(User.token) {
      setLogin(dispatch, User)
    }
  },[] )

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> }/>
          <Route path='/register' element={ <Register /> }/>
          <Route path='/quotation' element={<Quotation />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.authReducer
})

export default connect(mapStateToProps)(Routers);