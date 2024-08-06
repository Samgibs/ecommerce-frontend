import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/actions/productActions';
import { addToCartRequest } from '../../redux/actions/cartActions'; 
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, loading, error } = useSelector(state => state.product);
  const { token } = useContext(AuthContext); 
  const cartError = useSelector(state => state.cart.error); 

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (!token) {
      navigate('/login');
      return;
    }
    const payload = { product_id: product.id, quantity: 1 };
    dispatch(addToCartRequest(payload));
  };

  const renderError = (error) => {
    if (typeof error === 'object' && error !== null) {
      if (error.detail) {
        return error.detail;
      } else {
        return JSON.stringify(error);
      }
    }
    return error ? error.toString() : 'An unknown error occurred';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{renderError(error)}</p>
      ) : (
        product && (
          <div className="flex flex-col md:flex-row">
            <motion.img 
              src={product.image} 
              alt={product.name} 
              className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0"
              whileHover={{ scale: 1.1 }}
            />
            <div className="md:ml-4">
              <h2 className="text-2xl mb-2">{product.name}</h2>
              <p className="text-grey mb-2">{product.description}</p>
              <p className="text-brown font-bold mb-4">${product.price}</p>
              <button className="bg-blue px-4 py-2 rounded" onClick={handleAddToCart}>Add to Cart</button>
              {cartError && <p className="text-red-500 mt-4">{renderError(cartError)}</p>} {/* Display cart error */}
            </div>
          </div>
        )
      )}
    </motion.div>
  );
};

export default ProductDetail;







