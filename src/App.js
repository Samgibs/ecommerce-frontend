import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { About, Contact, PrivacyPolicy, TermsOfService } from './components/Layout/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import Cart from './components/Cart/Cart';
import OrderHistory from './components/Orders/OrderHistory';
import OrderDetail from './components/Orders/OrderDetail';
import Profile from './components/Auth/Profile'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/orders/:id" element={<OrderDetail />} />
            <Route path="/profile" element={<Profile />} /> {/* Add profile route */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            
          </Routes>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
