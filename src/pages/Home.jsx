import React from 'react';

import Card from '../components/Card/Card';

const Home = ({
  searchValue,
  clearInput,
  onChangeSearchInput,
  items,
  onAddToFavourite,
  onAddToCart,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Searching: ${searchValue}` : 'All sneakers'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={clearInput}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, idx) => {
            return (
              <Card
                key={idx}
                onFavourite={(obj) => onAddToFavourite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                {...item}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
