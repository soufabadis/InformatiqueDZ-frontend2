import { faApple } from '@fortawesome/free-brands-svg-icons'; // Using the brand icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const sectionStyle = {
  backgroundColor: '#eee',
};

const cardStyle = {
  padding: '0.5rem',
  margin: '0.5rem 0',
};

const ProductCardSection = () => {
  return (
    <section style={sectionStyle}>
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card text-black" style={cardStyle}>
              <FontAwesomeIcon icon={faApple} size="lg" className="pt-2 pb-1 px-2" />
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                className="card-img-top"
                alt="Apple Computer"
              />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">Believing is seeing</h5>
                  <p className="text-muted mb-2">Apple pro display XDR</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>Pro Display XDR</span>
                    <span>$5,999</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Pro stand</span>
                    <span>$999</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Vesa Mount Adapter</span>
                    <span>$199</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between total font-weight-bold mt-2">
                  <span>Total</span>
                  <span>$7,197.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardSection;
