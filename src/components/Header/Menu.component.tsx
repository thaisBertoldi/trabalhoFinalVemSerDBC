import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UlNav, DropDown, DivArrow } from './Header.style';
import { IoMdArrowDropdown } from 'react-icons/io';
import { handleLogout } from '../../store/action/authActions';

import ImgDefault from '../../images/foto-perfil.png'
import { useState } from 'react';


const Menu = ({auth, dispatch}:any) => {

  const navigate = useNavigate();
 
  const [open, setOpen] = useState<boolean>(false);

  const hasUser: string | any = localStorage.getItem('token');
  const User = JSON.parse(hasUser);
  console.log(User);

  return (
    <UlNav>
      <Link to={'/'}>Home</Link>
      <Link to={'/administration'}>Administrador</Link>
      <Link to={'/request-purchase'}>Solicitar compra</Link>
      <p> { User?.fullName } </p>
      <figure onClick={ () => setOpen(!open) }>
        <img src={ User?.profileImage !== null ? `data:image/jpeg;base64,${User?.profileImage}` : ImgDefault} alt="Foto do usuário"  />
        <DivArrow>
          <IoMdArrowDropdown />
        </DivArrow>
      </figure>
      {
        open && ( 
          <DropDown>
            <button onClick={ () => handleLogout(dispatch, navigate)}> Logout </button>
          </DropDown>
        )
      }
    </UlNav>
  );
}

const mapStateToProps = (state:any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Menu);