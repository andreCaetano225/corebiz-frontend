import IconUser from '../../assets/user.svg';
import ShoppingIcon from '../../assets/shopping-cart.svg';
import { useCartItems } from '../../hooks/useCart';

export const Account = () => {
  const { quantity } = useCartItems();

  return (
    <>
      <div className="header__account">
        <div>
          <span>
            <img src={IconUser} alt="" />
            <span>Minha Conta</span>
          </span>
        </div>

        <div className="header__cart">
          <img src={ShoppingIcon} alt="" />
          <div>
            <span>{quantity}</span>
          </div>
        </div>
      </div>
    </>
  );
};
