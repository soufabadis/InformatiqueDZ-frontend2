import { faFacebookF, faGithub, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faPhone, faSearch, faShoppingCart, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
  return (

    <>
    <header>
    <div className="container-xxl">
      <div className="row bgd-color">
        <div className="col-md-6  d-none d-sm-none d-md-block d-lg-blockcolor d-flex align-items-center justify-content-center pt-1.5">
          <p className="custom-very-small  m-0 text-capitalize">
            free shipping over 100 and free return
          </p>
        </div>
        <div className="col-md-6   d-flex  align-items-center justify-content-center pt-1.5">
          <p className="custom-very-small  m-0 text-capitalize ">
            contact :
            <a href="tel:+221658665062" className=''> +221 658665062 / 0658665062</a>
            <a><FontAwesomeIcon icon={faPhone} className='px-2  text-black' /> </a>
            <a href="https://www.facebook.com" className='text-white mx-2 '>
              <FontAwesomeIcon icon={faFacebookF} className="facebook-icons " />
            </a>
            <a href="https://www.twitter.com" className='text-white mx-2 '>
              <FontAwesomeIcon icon={faTwitter} className='twitter-icons ' />
            </a>
            <a href="https://www.twitter.com" className='text-white mx-2 '>
              <FontAwesomeIcon icon={faTelegram} className='twitter-icons ' />
            </a>
            <a href="https://www.twitter.com" className=' mx-2 '>
              <FontAwesomeIcon icon={faGithub}  />
            </a>
          </p>
        </div>
      </div>
    </div>

    </header>
    <header className="header-top py-1.5 bgdt-color custom-border sticky-top"  style={{ zIndex: 1000 }}>
    <div className="main-navbar shadow-sm  ">
      <div className="top-navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
              <h5 className="brand-name">InformatiqueDZ</h5>
            </div>
            <div className="col-md-5 my-auto">
              <form role="search">
                <div className="input-group">
                  <input type="search" placeholder="Search your product" className="form-control" />
                  <button className="btn bg-white" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-5 my-auto">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart (0)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/wishlist" className="nav-link">
                    <FontAwesomeIcon icon={faHeart} /> Wishlist (0)
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/user/profile"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faUser} /> Account
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown ">
                    <li>
                      <Link to="/login" className="dropdown-item">
                        <FontAwesomeIcon icon={faUser} /> Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/user/wishlist" className="dropdown-item">
                        <FontAwesomeIcon icon={faHeart} /> My Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to="/user/cart" className="dropdown-item">
                        <FontAwesomeIcon icon={faShoppingCart} /> My Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/logout" className="dropdown-item">
                        <FontAwesomeIcon icon={faSignOut} /> Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid   bgtop-color">
          <Link to="/" className="navbar-brand d-block d-sm-block d-md-none d-lg-none">
            InformatiqueDZ
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/store" className="nav-link">
                  Our Store
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/new-arrivals" className="nav-link">
                  New Arrivals
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/compare" className="nav-link">
                  Compare Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/electronics" className="nav-link">
                  Electronics
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/accessories" className="nav-link">
                  Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</>
  
  );
};

export default Header;
