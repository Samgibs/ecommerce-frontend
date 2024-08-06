import React from 'react';
import Register from '../components/Auth/Register';
import { motion } from 'framer-motion';


const RegisterPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <Register />
    </motion.div>
  );
};

export default RegisterPage;
