import LogoCorebiz from '../../assets/logo-corebiz.svg';
import IconHamburger from '../../assets/iconHamburger.svg';
import { Account } from './account';

import './header.scss';
import { InputSearch } from './inputSearch';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__div">
          <div>
            <img
              src={IconHamburger}
              alt="Icon Hamburger"
              className="header__img-mobile"
            />
            <img
              src={LogoCorebiz}
              alt="Logo Corebiz"
              className="header__img-logo"
            />
            <span>
              <InputSearch />
            </span>
            <Account />
          </div>
          <div className="header__input-mobile">
            <span>
              <InputSearch />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
