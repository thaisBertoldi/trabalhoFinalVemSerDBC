import Menu from './Menu.component';
import { HeaderNav } from './Header.style';

const Header = () => {

  const hasToken:string | any = localStorage.getItem('token');
  const User = JSON.parse(hasToken);

  return (
    <>
      {
        User?.token && (
          <HeaderNav>
            <Menu />
          </HeaderNav>
        )
      }
    </>
  );
}

export default Header;