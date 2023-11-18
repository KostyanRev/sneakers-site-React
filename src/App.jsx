import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header';
import Favourites from './pages/Favourites';
import Orders from './pages/Orders';
import AppContext from './context';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favouritesResponse, itemsResponse] =
          await Promise.all([
            axios.get('https://650d3d99a8b42265ec2bdfd3.mockapi.io/cart'),
            axios.get('https://650d3d99a8b42265ec2bdfd3.mockapi.io/favourites'),
            axios.get('https://650d3d99a8b42265ec2bdfd3.mockapi.io/items'),
          ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavourites(favouritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Failed to request data ;(');
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://650d3d99a8b42265ec2bdfd3.mockapi.io/cart/${Number(
            findItem.id
          )}`
        );
      } else {
        const { data } = await axios.post(
          'https://650d3d99a8b42265ec2bdfd3.mockapi.io/cart',
          obj
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to cart');
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://650d3d99a8b42265ec2bdfd3.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert('Failed to delete from cart');
    }
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://650d3d99a8b42265ec2bdfd3.mockapi.io/favourites/${obj.id}`
        );
        setFavourites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          'https://650d3d99a8b42265ec2bdfd3.mockapi.io/favourites',
          obj
        );
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to favourites');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(id) === Number(obj.parentId));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favourites,
        isItemAdded,
        onAddToFavourite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
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
          <Route path="/favourites" element={<Favourites />} exact />
          <Route path="/orders" element={<Orders />} exact />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
