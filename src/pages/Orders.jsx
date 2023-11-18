import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../components/Card/Card';
import EmptyPage from '../components/EmptyPage';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://650d3d99a8b42265ec2bdfd3.mockapi.io/orders'
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
        <h1 className="title-size">My orders</h1>
      </div>

      {orders.length > 0 ? (
        <div className="cardItems d-flex flex-wrap">
          {(isLoading ? [...Array(8)] : orders).map((item, idx) => (
            <Card key={idx} loading={isLoading} {...item} />
          ))}
        </div>
      ) : (
        <EmptyPage
          title={`You don't have any orders`}
          description={'Make at least one order'}
          image={'/img/smile-for-orders.png'}
        />
      )}
    </div>
  );
};

export default Orders;
