import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UlNav, DropDown, DivArrow } from './Header.style';
import { IoMdArrowDropdown } from 'react-icons/io';
import { handleLogout } from '../../store/action/authActions';

import teste from '../../images/foto-perfil.png'
import { useState } from 'react';


const Menu = ({auth, dispatch}:any) => {

  const navigate = useNavigate();
 
  const [open, setOpen] = useState<boolean>(false);

  return (
    <UlNav>
      <Link to={'/'}>Home</Link>
      <figure onClick={ () => setOpen(!open) }>
        <img src={teste} alt="Foto do usuário" />
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