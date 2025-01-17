import './news.scss';

export const Newsletter = () => {
  return (
    <>
      <section className="news">
        <div>
          <h2>Participe de nossas news com promoções e novidades!</h2>
          <form action="">
            <div>
              <input type="text" placeholder="Digite seu nome" />
              <input type="email" placeholder="Digite seu email" />
              <button>Eu quero!</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
