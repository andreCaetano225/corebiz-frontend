import IconEmail from '../../assets/iconEmail.svg';
import IconPhoto from '../../assets/iconPhone.svg';
import LogoFooter from '../../assets/logoFooter.svg';

import './footer.scss';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__div_contact">
            <button>
              <img src={IconEmail} alt="" />
              ENTRE EM CONTATO
            </button>
            <button>
              <img src={IconPhoto} alt="" />
              FALE COM O NOSSO CONSULTOR ONLINE
            </button>
          </div>
          <div className="footer__loca">
            <h2>Localização</h2>
          </div>
          <div className="footer__detail_loca">
            <div>
              <span>Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP</span>
              <span>brasil@corebiz.ag</span>
              <span>+55 11 3090 1039</span>
            </div>

            <img src={LogoFooter} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};
