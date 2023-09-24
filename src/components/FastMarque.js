import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import image1 from '../assets/images/brand-01.png';
import image2 from '../assets/images/brand-02.png';
import image3 from '../assets/images/brand-03.png';
import image4 from '../assets/images/brand-04.png';
import image5 from '../assets/images/brand-05.png';
import image6 from '../assets/images/brand-06.png';
import image8 from '../assets/images/brand-08.png';



import '../styles/home.css';

export default function FastMarque() {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <Marquee>
            <div className="d-flex card-wrapper shadow   p-3 mb-5 bg-white rounded">
              <div className="brand mx-4 w-25">
                <Link to="#"><img src={image1}alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src={image2} alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src={image3} alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src={image4} alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src={image5} alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src={image6} alt="brand" width="100" height="100" /></Link>
              </div>
              <div className="brand mx-4 w-25">
                <Link to="#"><img src={image8} alt="brand" width="100" height="100" /></Link>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}
