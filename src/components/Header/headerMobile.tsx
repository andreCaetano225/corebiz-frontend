import { Account } from './account';
import { InputSearch } from './inputSearch';
import LogoCorebiz from '../../assets/logo-corebiz.svg';
import IconHamburger from '../../assets/iconHamburger.svg';

export const HeaderMobile = () => {
  return (
    <>
      <header className="header">
        <div className="header__div">
          <div>
            <img src={IconHamburger} alt="Icon Hamburger" />
            <img src={LogoCorebiz} alt="Logo Corebiz" />
            <Account />
          </div>
          <InputSearch />
        </div>
      </header>
    </>
  );
};
