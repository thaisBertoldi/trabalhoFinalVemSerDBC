import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Login, Register } from './pages';

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/register' element={ <Register /> }/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routers;