import React from 'react';

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Shopping cart</h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 usd</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 usd</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>

          <ul className="cartTotalBlock">
            <li>
              <span>Total:</span>
              <div></div>
              <b>21 498 usd</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>1074 usd</b>
            </li>
          </ul>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">Sneakers React</h3>
            <p className="opacity-5">The best sneakers store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
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
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favourite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            />
            <h5 className="">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 usd</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="sneakers"
            />
            <h5 className="">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 usd</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="sneakers"
            />
            <h5 className="">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 usd</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="sneakers"
            />
            <h5 className="">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 usd</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
