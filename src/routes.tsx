import { useEffect } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { setLogin } from "./store/action/authActions";

import { Header, Footer } from './components';
import { Login, Register, Home, Quotation } from './pages';
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

const mapStateToProps = (state: RootState) => ({
  auth: state.authReducer
})

export default connect(mapStateToProps)(Routers);