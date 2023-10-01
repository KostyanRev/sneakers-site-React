import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get('https://650d3d99a8b42265ec2bdfd3.mockapi.io/items')
      .then(({ data }) => {
        setItems(data);
      });
    axios
      .get('https://650d3d99a8b42265ec2bdfd3.mockapi.io/cart')
      .then(({ data }) => {
        setCartItems(data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://650d3d99a8b42265ec2bdfd3.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavourite = (obj) => {
    axios.post('https://651131d4829fa0248e3fa10f.mockapi.io/favourites', obj);
    setFavourites((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://650d3d99a8b42265ec2bdfd3.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route exact path="/favourites" element="TEST" />
      </Routes>

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
                  title={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onFavourite={(obj) => onAddToFavourite(obj)}
                  onPlus={(obj) => onAddToCart(obj)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
