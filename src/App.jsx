import Home from './pages/Home';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Favourites from './pages/Favourites';
import AppContext from './context';

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        'https://650d3d99a8b42265ec2bdfd3.mockapi.io/cart'
      );
      const favouritesResponse = await axios.get(
        'https://651131d4829fa0248e3fa10f.mockapi.io/favourites'
      );
      const itemsResponse = await axios.get(
        'https://650d3d99a8b42265ec2bdfd3.mockapi.io/items'
      );

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavourites(favouritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
        axios.delete(
          `https://650d3d99a8b42265ec2bdfd3.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios
          .post('https://650d3d99a8b42265ec2bdfd3.mockapi.io/cart', obj)
          .then(setCartItems((prev) => [...prev, obj]));
      }
    } catch (error) {
      alert('Failed to add to cart');
    }
  };

  const onAddToFavourite = (obj) => {
    try {
      if (favourites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://651131d4829fa0248e3fa10f.mockapi.io/favourites/${obj.id}`
        );
        setFavourites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios
          .post('https://651131d4829fa0248e3fa10f.mockapi.io/favourites', obj)
          .then(setFavourites((prev) => [...prev, obj]));
      }
    } catch (error) {
      alert('Failed to add to favourites');
    }
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(id) === Number(obj.id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favourites,
        isItemAdded,
        onAddToFavourite,
        setCartOpened,
        setCartItems,
      }}>
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
          <Route
            exact
            path="/"
            element={
              <Home
                cartItems={cartItems}
                searchValue={searchValue}
                clearInput={clearInput}
                onChangeSearchInput={onChangeSearchInput}
                items={items}
                onAddToFavourite={onAddToFavourite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
