import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../index.css';
import { faSearch, faShoppingCart, faHeart, faUser,faPhone ,faSignOut} from '@fortawesome/free-solid-svg-icons';


import { faFacebookF, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
  return (
    /* header top */
    <header className="header-top py-1.5 bgd-color custom-border">
      <div className="container-xxl">
        <div className="row bgd-color">
          <div className="col-6 bgd-color d-flex align-items-center justify-content-center pt-1.5">
            <p className="custom-very-small bgd-color m-0 text-capitalize">
              free shipping over 100 and free return
            </p>
          </div>
          <div className="col-6 bgd-color d-flex align-items-center justify-content-center pt-1.5">
            <p className=" custom-very-small bgd-color m-0 text-capitalize">
            contact :<a href="tel:+221658665062" className=''> +221 658665062 / 0658665062</a> 
            <a><FontAwesomeIcon icon={faPhone} className='px-2  bgd-color text-black'/> </a>
            <a href="https://www.facebook.com" className='text-white mx-2 '>
                <FontAwesomeIcon icon={faFacebookF} className="facebook-icons " />
              </a>
              <a href="https://www.twitter.com" className='text-white mx-2 '>
                <FontAwesomeIcon icon={faTwitter} className='twitter-icons '/>
              </a>         
              <a href="https://www.twitter.com" className='text-white mx-2 '>
                <FontAwesomeIcon icon={faTelegram} className='twitter-icons '/>
              </a>  
            </p>
          </div>
          
        </div>
      </div>

      <div className="main-navbar shadow-sm sticky-top">
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
                  <a className="nav-link" href="#">
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart (0)
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FontAwesomeIcon icon={faHeart} /> Wishlist (0)
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faUser} /> Username
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faUser} /> Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faHeart} /> My Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faShoppingCart} /> My Cart
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faSignOut} /> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
            InformatiqueDZ
          </a>
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
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  All Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Featured Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Electronics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fashions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Accessories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Appliances
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  
    </header>

  
  

  )  
};

export default Header;
