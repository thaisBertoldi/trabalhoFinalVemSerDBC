import { useEffect } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { RootState } from './store';
import { setLogin } from "./store/action/authActions";
import { isLoggedDTO } from './models/UserDTO';
import { 
  Home, 
  Login, 
  Register, 
  NotFound, 
  Administration, 
  RequestPurchase, 
} from './pages';

const Routers = ({user, dispatch}: isLoggedDTO & DispatchProp) => {

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
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={ <Login /> }/>
          <Route path='/register' element={ <Register /> }/>
          <Route path='/request-purchase' element={<RequestPurchase />} />
          <Route path='/administration' element={<Administration />} />
        </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
})

export default connect(mapStateToProps)(Routers);
