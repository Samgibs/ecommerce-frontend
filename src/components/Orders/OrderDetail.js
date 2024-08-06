import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios';


const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`/api/orders/${id}/`);
        setOrder(response.data);
      } catch (error) {
        console.error('Failed to fetch order', error);
      }
    };
    fetchOrder();
  }, [id]);

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Order #{order.id}</h1>
      <div className="mb-4">
        <h2 className="text-xl">Items</h2>
        {order.items && order.items.map(item => (
          <div key={item.product.id} className="flex items-center mb-4">
            <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover mr-4"/>
            <div className="flex-1">
              <h2 className="text-xl">{item.product.name}</h2>
              <p className="text-grey">Quantity: {item.quantity}</p>
            </div>
            <p className="text-brown font-bold">${item.product.price}</p>
          </div>
        ))}
      </div>
      <div className="text-right">
        <h2 className="text-2xl">Total: ${order.total_price}</h2>
        <p className="text-grey">Status: {order.status}</p>
        <p className="text-grey">Placed on: {new Date(order.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default OrderDetail;
