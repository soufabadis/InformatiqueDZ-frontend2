import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import image2 from '../assets/images/brand-01.png';
import '../styles/home.css';

export default function FastMarque() {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <Marquee>
            <div className="d-flex card-wrapper">
              <div className="brand mx-4 w-25">
                <Link to="#"><img src="../assets/images/brand-01.png" alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src={image2} alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src="./assets/images/brand-03.png" alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src="./assets/images/brand-04.png" alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src="./assets/images/brand-05.png" alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src="./assets/images/brand-06.png" alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src="./assets/images/brand-08.png" alt="brand" width="100" height="100" /></Link>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}
