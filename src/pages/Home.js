import React from 'react';
import ProductList from '../components/Products/ProductList';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-3xl font-bold mb-4">Welcome to our Store</h1>
      <ProductList />
    </motion.div>
  );
};

export default Home;
