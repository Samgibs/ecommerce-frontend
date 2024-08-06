import React from 'react';
import ProductDetail from '../components/Products/ProductDetail';
import { motion } from 'framer-motion';
import axios from '../axios';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <ProductDetail productId={id} />
    </motion.div>
  );
};

export default ProductPage;
