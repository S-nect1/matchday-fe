import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <h1 className="logo">
      <Link
        to="/"
        className="!flex items-center gap-2 text-xl font-bold text-blue-600 transition-colors hover:text-blue-700"
      >
        <img src={'/logo.svg'} alt="logo" />
      </Link>
    </h1>
  );
};
