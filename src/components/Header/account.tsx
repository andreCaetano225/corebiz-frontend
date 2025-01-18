import IconUser from '../../assets/user.svg';
import ShoppingIcon from '../../assets/shopping-cart.svg';

export const Account = () => {
  return (
    <>
      <div className="header__account">
        <div>
          <span>
            <img src={IconUser} alt="" />
            <span>Minha Conta</span>
          </span>
        </div>

        <img src={ShoppingIcon} alt="" />
      </div>
    </>
  );
};
