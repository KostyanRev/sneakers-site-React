import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../components/Card/Card';
import AppContext from '../context';

const Orders = () => {
  const { onAddToFavourite, onAddToCart } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://651131d4829fa0248e3fa10f.mockapi.io/orders'
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Failed to request the orders');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My orders</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, idx) => (
          <Card key={idx} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
