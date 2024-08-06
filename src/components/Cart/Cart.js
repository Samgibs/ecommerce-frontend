import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItemRequest, removeCartItemRequest } from '../../redux/actions/cartActions';
import { AuthContext } from '../../context/AuthContext';
import axios from '../../axios';

const Cart = () => {
  const { token } = useContext(AuthContext);
  const { items, total_price, loading, error, message } = useSelector(state => state.cart);
  const dispatch = useDispatch();
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
          {message && <p>{message}</p>}  {/* Display success message */}
          {items.map((item, index) => (
            <div key={`${item.product.id}-${index}`}>
              <img src={item.product.image} alt={item.product.name}/>
              <h2>{item.product.name}</h2>
              <p>{item.product.description}</p>
              <p>${item.product.price}</p>
              <input 
                type="number" 
                value={item.quantity} 
                onChange={(e) => handleUpdateCart(item.product.id, e.target.value)} 
              />
              <button onClick={() => handleRemoveFromCart(item.product.id)}>Remove</button>
            </div>
          ))}
          <p>Total: ${total_price}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;




