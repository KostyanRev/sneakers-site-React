import React from 'react';
import { Link } from 'react-router-dom';

const EmptyPage = ({ image, title, description }) => {
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex empty">
      <img
        width={70}
        height={70}
        src={image}
        alt="Empty Cart"
        className="mb-20"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <Link to={'/'}>
        <button className="greenButton">
          <img src="/img/arrow.svg" alt="Arrow" />
          Back home
        </button>
      </Link>
    </div>
  );
};

export default EmptyPage;
