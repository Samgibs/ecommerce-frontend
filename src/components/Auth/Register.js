import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../../redux/actions/authActions'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { successMessage, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerRequest({ username, email, password })); 
  };

  useEffect(() => {
    if (successMessage) {
      alert('Registration successful! Redirecting to home.');
      navigate('/');
    }
  }, [successMessage, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey-dark">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">Register</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="mb-2 p-2 w-full border rounded"/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="mb-2 p-2 w-full border rounded"/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mb-2 p-2 w-full border rounded"/>
        <button type="submit" className="bg-blue text-white p-2 w-full rounded">Register</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
