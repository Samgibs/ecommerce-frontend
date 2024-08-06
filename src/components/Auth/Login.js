import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/actions/authActions'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ username, password })); 
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey-dark">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="mb-2 p-2 w-full border rounded"/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mb-2 p-2 w-full border rounded"/>
        <button type="submit" className="bg-blue text-white p-2 w-full rounded">Login</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
