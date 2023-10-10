import React from 'react';

import Card from '../components/Card/Card';

const Home = ({
  searchValue,
  clearInput,
  onChangeSearchInput,
  items,
  onAddToFavourite,
  onAddToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filteredItems).map((item, idx) => (
      <Card
        key={idx}
        onFavourite={(obj) => onAddToFavourite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="content-header d-flex align-center justify-between mb-40">
        <h1 className="title-size">
          {searchValue ? `Searching: ${searchValue}` : 'All sneakers'}
        </h1>
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
      <div className="cardItems d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
