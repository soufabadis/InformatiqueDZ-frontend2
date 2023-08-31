import React from 'react';
import '../index.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="header-top py-1.5 bgd-color custom-border">
      <div className="container-xxl">
        <div className="row bgd-color">
          <div className="col-6 bgd-color d-flex align-items-center justify-content-center pt-1.5">
            <p className="text-white custom-very-small bgd-color m-0 text-capitalize">
              free shipping over 100 and free return
            </p>
          </div>
          <div className="col-6 bgd-color d-flex align-items-center justify-content-center pt-1.5">
            <p className="text-white custom-very-small bgd-color m-0 text-capitalize">
            contact :<a href="tel:+221658665062" className='text-white bgd-color'> +221 658665062 / 0658665062</a> 
            <FontAwesomeIcon icon={faPhone} className='px-2 text-warning bgd-color'/>
            </p>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
