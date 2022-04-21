import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Login, Register, Home } from './pages';

const Routers = () => {

  useEffect( () => {
    
  },[] )

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> }/>
          <Route path='/register' element={ <Register /> }/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routers;