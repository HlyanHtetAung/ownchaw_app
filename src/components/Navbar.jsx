import React from 'react';
import { Link } from 'react-router-dom';
import { PRE_STYLES } from '../styles';

const Navbar = () => {
  return (
    <div className="bg-navbarColor font-poppins sticky top-0 left-0 z-50">
      <div
        className={`${PRE_STYLES.center_div} py-[18px] flex items-center justify-between`}
      >
        <Link to="/">
          <h3 className="font-bold text-white text-xl">Astrological Reading</h3>
        </Link>
        <div className="flex gap-[20px] text-white font-semibold">
          <Link to="/articles">
            <p>Articles</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
