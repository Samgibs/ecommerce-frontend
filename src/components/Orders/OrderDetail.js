import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');
  const [location, setLocation] = useState('');

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

  const handleConfirmOrder = async () => {
    try {
      await axios.put(`/api/orders/${id}/`, { status: 'Confirmed' });
      setOrder({ ...order, status: 'Confirmed' });
    } catch (error) {
      console.error('Failed to confirm order', error);
    }
  };

  const handleCancelOrder = async () => {
    try {
      await axios.put(`/api/orders/${id}/`, { status: 'Canceled' });
      setOrder({ ...order, status: 'Canceled' });
    } catch (error) {
      console.error('Failed to cancel order', error);
    }
  };

  const handleSelectPaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleProvideLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Order #{order.id}</h1>
      <div className="mb-4">
        <h2 className="text-xl mb-2">Items</h2>
        {order.items && order.items.map(item => (
          <div key={item.product.id} className="flex items-center mb-4 border-b pb-4">
            <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover mr-4" />
            <div className="flex-1">
              <h2 className="text-xl">{item.product.name}</h2>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-800 font-bold">${item.product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right">
        <h2 className="text-2xl">Total: ${order.total_price}</h2>
        <p className="text-gray-600">Status: {order.status}</p>
        <p className="text-gray-600">Placed on: {new Date(order.created_at).toLocaleDateString()}</p>
        <div className="my-4">
          <label>
            Payment Method:
            <select value={paymentMethod} onChange={handleSelectPaymentMethod} className="ml-2 border p-1">
              <option value="">Select</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </label>
        </div>
        <div className="my-4">
          <label>
            Delivery Location:
            <input
              type="text"
              value={location}
              onChange={handleProvideLocation}
              className="ml-2 border p-1"
              placeholder="Enter your location"
            />
          </label>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={handleConfirmOrder} className="bg-green-500 text-white px-4 py-2 rounded">Confirm Order</button>
          <button onClick={handleCancelOrder} className="bg-red-500 text-white px-4 py-2 rounded">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;


