import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-grey-dark text-white p-8 text-center">
    <div className="mb-4">
      <h2 className="text-2xl font-bold">E-Commerce</h2>
      <p className="text-sm">Your one-stop shop for everything you need</p>
    </div>
    <div className="mb-4 flex justify-center space-x-6">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-grey transition-colors duration-300">
        <FaFacebook size={24} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-grey transition-colors duration-300">
        <FaTwitter size={24} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-grey transition-colors duration-300">
        <FaInstagram size={24} />
      </a>
    </div>
    <div className="mb-4">
      <nav className="flex justify-center space-x-6">
        <a href="/about" className="hover:text-blue transition-colors duration-300">About Us</a>
        <a href="/contact" className="hover:text-blue transition-colors duration-300">Contact</a>
        <a href="/privacy" className="hover:text-blue transition-colors duration-300">Privacy Policy</a>
        <a href="/terms" className="hover:text-blue transition-colors duration-300">Terms of Service</a>
      </nav>
    </div>
    <p>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
  </footer>
);

const About = () => (
  <section className="p-8">
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p>Welcome to E-Commerce, your ultimate destination for all your shopping needs. We offer a wide range of products from electronics to fashion, home goods to beauty products. Our mission is to provide high-quality items at competitive prices with exceptional customer service. Thank you for choosing us for your shopping experience!</p>
  </section>
);

const Contact = () => (
  <section className="p-8">
    <h2 className="text-2xl font-bold mb-4">Contact</h2>
    <p>Phone: 0719271828</p>
    <p>Email: mukabi339@gmail.com</p>
  </section>
);

const PrivacyPolicy = () => (
  <section className="p-8">
    <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
    <p>We value your privacy and are committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data. We ensure that your information is secure and only used for providing and improving our services. For more details, please read our full Privacy Policy on our website.</p>
  </section>
);

const TermsOfService = () => (
  <section className="p-8">
    <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
    <p>By using our services, you agree to our Terms of Service. These terms govern your use of our website and services, outlining your rights and responsibilities. We strive to provide a safe and enjoyable shopping experience for all users. For comprehensive information, please review our full Terms of Service on our website.</p>
  </section>
);

export { About, Contact, PrivacyPolicy, TermsOfService };
export default Footer;





