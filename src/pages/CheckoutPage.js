import React from 'react';
import { motion } from 'framer-motion';
import axios from '../axios';

const CheckoutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <p>Checkout form will be implemented here.</p>
    </motion.div>
  );
};

export default CheckoutPage;
