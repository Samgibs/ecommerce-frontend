import React from 'react';
import Login from '../components/Auth/Login';
import { motion } from 'framer-motion';
import axios from '../axios';

const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <Login />
    </motion.div>
  );
};

export default LoginPage;
