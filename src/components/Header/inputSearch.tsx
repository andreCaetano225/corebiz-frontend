import IconSearch from '../../assets/search-icon.svg';

export const InputSearch = () => {
  return (
    <>
      <div className="header__inputSearch">
        <input type="text" placeholder="O que você está procurando?" />
        <img src={IconSearch} alt="" />
      </div>
    </>
  );
};
