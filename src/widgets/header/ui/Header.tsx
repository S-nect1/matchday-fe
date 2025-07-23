import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header__container">
      <div
        className="header__wrapper flex h-[100px] max-w-[1280px] items-center justify-between"
        style={{ margin: '0 auto' }}
      >
        <h1 className="logo">
          <Link to="/">
            <img src={'/logo.svg'} alt="logo" />
          </Link>
        </h1>
      </div>
    </header>
  );
};
