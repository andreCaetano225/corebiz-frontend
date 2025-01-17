import IconEmail from '../../assets/iconEmail.svg';
import IconPhoto from '../../assets/iconPhone.svg';

import './footer.scss';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <button>
            <img src={IconEmail} alt="" />
            ENTRE EM CONTATO
          </button>
          <button>
            <img src={IconPhoto} alt="" />
            FALE COM O NOSSO CONSULTOR ONLINE
          </button>
        </div>
        <div></div>
      </footer>
    </>
  );
};
