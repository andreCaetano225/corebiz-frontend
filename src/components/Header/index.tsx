import LogoCorebiz from '../../assets/logo-corebiz.svg';
import { Account } from './account';

import './header.scss';
import { InputSearch } from './inputSearch';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__div">
          <img src={LogoCorebiz} alt="" />
          <InputSearch />
          <Account />
        </div>
      </header>
    </>
  );
};
