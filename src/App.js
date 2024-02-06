import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import CompareProducts from './pages/CompareProducts';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import Signup from './pages/Signup';
import Forgetpassword from './pages/Forgetpassword';
import SingleBlogs from './pages/SingleBloge';
import TermsAndConditions from './pages/TermsAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="store" element={<Store/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="Compare" element={<CompareProducts/>} />
          <Route path="login" element={<Login/>} />
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="Forgotpassword" element={<Forgetpassword/>} />
          <Route path="blogs/blog/:id" element={<SingleBlogs/>} />
          <Route path="termsAndConditions" element={<TermsAndConditions/>} />
          <Route path="shippingPolicy" element={<ShippingPolicy/>} />
          <Route path="privacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="store/:id" element={<SingleProduct/>} />

     </Route>
</Routes>
    </BrowserRouter>
  );
}

export default App;
