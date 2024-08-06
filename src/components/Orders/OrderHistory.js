import React, { useEffect, useState } from 'react';
import axios from '../../axios';

import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders/');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Order History</h1>
      {orders.map(order => (
        <Link to={`/orders/${order.id}`} key={order.id} className="border rounded p-4 mb-4 bg-white flex justify-between items-center">
          <div>
            <h2 className="text-xl">Order #{order.id}</h2>
            <p className="text-grey">Total: ${order.total_price}</p>
            <p className="text-grey">Status: {order.status}</p>
          </div>
          <div>
            <p className="text-grey">Placed on: {new Date(order.created_at).toLocaleDateString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OrderHistory;
