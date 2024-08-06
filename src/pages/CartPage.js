import React from 'react';
import Cart from '../components/Cart/Cart';
import { motion } from 'framer-motion';
import axios from '../axios';

const CartPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
      <Cart />
    </motion.div>
  );
};

export default CartPage;
