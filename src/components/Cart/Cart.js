import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItemRequest, removeCartItemRequest } from '../../redux/actions/cartActions';
import { AuthContext } from '../../context/AuthContext';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { token } = useContext(AuthContext);
  const { items, total_price, loading, error, message } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      if (!token) {
        setLocalError('You must be logged in to view your cart.');
        return;
      }
      try {
        const response = await axios.get('/api/cart/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        dispatch({ type: 'ADD_TO_CART_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'ADD_TO_CART_FAILURE', payload: 'Failed to fetch cart' });
      }
    };
    fetchCart();
  }, [token, dispatch, setLocalError]);

  const handleUpdateCart = (productId, quantity) => {
    dispatch(updateCartItemRequest(productId, quantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeCartItemRequest(productId));
  };

  const handleViewOrders = () => {
    navigate('/orders');
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const removeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ff4d4d',
    color: 'white',
  };

  const viewOrdersButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4caf50',
    color: 'white',
  };

  const cartItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px 0',
  };

  const cartItemDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '70%',
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : localError ? (
        <p>{localError}</p>
      ) : (
        <div>
          {message && <p>{message}</p>} {/* Display success message */}
          {items.map((item, index) => (
            <div key={`${item.product.id}-${index}`} style={cartItemStyle}>
              <div style={cartItemDetailsStyle}>
                <img src={item.product.image} alt={item.product.name} style={{ maxWidth: '100px' }} />
                <h2>{item.product.name}</h2>
                <p>{item.product.description}</p>
                <p>${item.product.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleUpdateCart(item.product.id, e.target.value)}
                  style={{ width: '50px', padding: '5px' }}
                />
              </div>
              <button onClick={() => handleRemoveFromCart(item.product.id)} style={removeButtonStyle}>Remove</button>
            </div>
          ))}
          <p>Total: ${total_price}</p>
          <button onClick={handleViewOrders} style={viewOrdersButtonStyle}>View Orders</button>
        </div>
      )}
    </div>
  );
};

export default Cart;






