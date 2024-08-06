import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../../redux/actions/authActions';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logoutRequest()); 
  };

  return (
    <header className="bg-dark text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-2xl mb-4 md:mb-0"><Link to="/">E-Commerce</Link></h1>
      <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <Link to="/" className="text-blue hover:text-grey transition-colors duration-300">Home</Link>
        <Link to="/cart" className="text-blue hover:text-grey transition-colors duration-300">
          <FaShoppingCart /> ({cart.items.length})  {/* Display cart item count */}
        </Link>
        {auth.isAuthenticated ? (
          <>
            <Link to="/profile" className="text-blue hover:text-grey transition-colors duration-300"><FaUser /></Link>
            <button
              onClick={handleLogout}
              className="bg-blue hover:bg-grey text-white px-4 py-2 rounded transition-colors duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-blue hover:text-grey transition-colors duration-300">Login</Link>
            <Link
              to="/register"
              className="bg-blue hover:bg-grey text-white px-4 py-2 rounded transition-colors duration-300"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

