import React from 'react';

function Drawer({ onRemove, onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Shopping cart
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj, idx) => (
                <div key={idx} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} usd</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
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
              <button className="greenButton">
                Make an order <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt="Empty Cart"
              className="mb-20"
            />
            <h2>Cart is empty</h2>
            <p className="opacity-6">
              Add at least one pair of sneakers to place an order
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
