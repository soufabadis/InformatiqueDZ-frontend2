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


     </Route>
</Routes>
    </BrowserRouter>
  );
}

export default App;
