import React from 'react';

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">Sneakers React</h3>
          <p className="opacity-5">The best sneakers store</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>1205 usd</span>
        </li>
        <li>
          <img
            className="mr-30"
            width={18}
            height={18}
            src="/img/user.svg"
            alt="user"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
