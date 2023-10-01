import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">Sneakers React</h3>
            <p className="opacity-5">The best sneakers store</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span>1205 usd</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favourites">
            <img width={18} height={18} src="/img/heart.svg" alt="Bookmarks" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
