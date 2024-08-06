import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
    >
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="border rounded p-4 bg-white">
            <motion.img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover mb-2"
              whileHover={{ scale: 1.1 }}
            />
            <h2 className="text-xl mb-2">{product.name}</h2>
            <p className="text-grey">{product.description}</p>
            <p className="text-brown font-bold">${product.price}</p>
          </Link>
        ))
      )}
    </motion.div>
  );
};

export default ProductList;





