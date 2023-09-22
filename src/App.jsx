import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get('https://650d3d99a8b42265ec2bdfd3.mockapi.io/items')
      .then(({ data }) => {
        setItems(data);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  const ondeleteFromCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item, idx) => {
            return (
              <Card
                key={idx}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onClickFavourite={() => console.log('Added in bookmarks')}
                onPlus={(obj) => onAddToCart(obj)}
                onDelete={(obj) => ondeleteFromCart(obj)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
